import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Overview,
  RecentPost,
  RecentUser,
  RoleDistribution,
  AdminDashboardData,
  AdminHistory,
} from '../../models/admin.model';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { PostView } from '../../models/post.model';
import { route } from '../../user-routing.module';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { DatasetData } from '../../models/common.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  overview!: Overview;
  roleDistribution: RoleDistribution[] = [];
  recentPosts: PostView[] = [];
  recentUsers: RecentUser[] = [];
  dashboardData: AdminDashboardData | null = null;
  mostLikedPosts: PostView[] = [];
  mostCommentedPosts: PostView[] = [];
  historyData: AdminHistory = {} as AdminHistory;
  isLoading: boolean = true;
  error: string | null = null;
  route = route;

  config: ChartConfiguration<'line'> = {} as ChartConfiguration<'line'>;

  @ViewChild('lineChartCanvas', { static: true })
  lineChartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart<'line', number[], string>;

  @ViewChild('pieChartCanvas', { static: true })
  pieChartCanvas!: ElementRef<HTMLCanvasElement>;
  private pieChart!: Chart<'pie', number[], string>;

  constructor(private _adminService: AdminService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.isLoading = true;
    this.error = null;

    this._adminService.getDashboardStats().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.overview = data.overview;
        this.recentPosts = data.recentActivity.posts;
        this.recentUsers = data.recentActivity.users;
        this.mostLikedPosts = data.recentActivity.mostLikedPosts;
        this.mostCommentedPosts = data.recentActivity.mostCommentedPosts;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message || 'Failed to load dashboard data';
        this.isLoading = false;
      },
    });

    this._adminService.getHistory().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.historyData = data;
        this.generateGraph();
      },
      error: (err) => {
        this.error = err.message || 'Failed to load dashboard data';
        this.isLoading = false;
      },
    });
  }

  generateGraph() {
    const datasetsData: DatasetData[] = [
      {
        label: 'Users',
        data: this.historyData.usersOverTime,
        color: 'blue',
      },
      {
        label: 'Posts',
        data: this.historyData.postsOverTime,
        color: 'green',
      },
      {
        label: 'Comments',
        data: this.historyData.commentsOverTime,
        color: 'orange',
      },
    ];

    // Create chart config
    const config = this.createLineChartConfig(datasetsData);

    // Create the chart
    // if (this.chart) {
    //   this.chart.destroy(); // Destroy existing chart if any
    // }
    this.chart = new Chart(this.lineChartCanvas.nativeElement, config);

    const pieConfig = this.createPieChartConfig();
    this.pieChart = new Chart(this.pieChartCanvas.nativeElement, pieConfig);
  }

  createLineChartConfig(
    datasetsData: DatasetData[]
  ): ChartConfiguration<'line', number[], string> {
    // Create a unique set of all dates across datasets
    const allDatesSet = new Set<string>();
    datasetsData.forEach((dataset) => {
      dataset.data.forEach((point) => allDatesSet.add(point.date));
    });
    const allDates: string[] = Array.from(allDatesSet).sort();

    // Build datasets for Chart.js
    const chartDatasets = datasetsData.map((dataset) => {
      const dataMap = new Map<string, number>(
        dataset.data.map((point) => [point.date, point.count])
      );

      const filledData: number[] = allDates.map(
        (date) => dataMap.get(date) || 0
      );

      return {
        label: dataset.label,
        data: filledData,
        borderColor: dataset.color,
        fill: false,
        tension: 0.3, // Smooth line
      };
    });

    const config: ChartConfiguration<'line', number[], string> = {
      type: 'line',
      data: {
        labels: allDates,
        datasets: chartDatasets,
      },
      options: {
        // responsive: true,
        maintainAspectRatio: false, // Key for mobile responsiveness!
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { size: 12 }, // Smaller font for mobile
            },
          },
          title: {
            display: true,
            text: 'Historical Data Over Time',
            font: { size: 16 }, // Adjust title font size
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          x: {
            title: { display: true, text: 'Date', font: { size: 12 } },
            ticks: {
              font: { size: 10 },
              maxRotation: 45,
              minRotation: 30,
              autoSkip: true,
            },
            grid: { display: false }, // Hide grid lines for mobile clarity
          },
          y: {
            title: { display: true, text: 'Count', font: { size: 12 } },
            ticks: { font: { size: 10 } },
            beginAtZero: true,
            grid: { display: true },
          },
        },
        interaction: {
          mode: 'nearest', // Better for touch interactions
          axis: 'x',
          intersect: false,
        },
      },
    };

    return config;
  }

  createPieChartConfig(): ChartConfiguration<'pie', number[], string> {
    const labels = this.historyData.roleDistribution.map((role) => role.role);
    const data = this.historyData.roleDistribution.map((role) => role.count);

    const config: ChartConfiguration<'pie', number[], string> = {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Role Distribution',
            data: data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'User Role Distribution' },
        },
      },
    };

    return config;
  }

  ngOnDestroy(): void {
    // Destroy line chart if it exists
    if (this.chart) {
      this.chart.destroy();
    }

    // Destroy pie chart if it exists
    if (this.pieChart) {
      this.pieChart.destroy();
    }
  }
}
