import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { EndUserComputingComponent } from './end-user-computing/end-user-computing.component';
import { TooltipModule } from 'primeng/tooltip';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CloudInfraComponent } from './cloud-infra/cloud-infra.component';
import { NetworkServerAdminComponent } from './network-server-admin/network-server-admin.component';
import { SecureServillianceSysComponent } from './secure-servilliance-sys/secure-servilliance-sys.component';
import { DataCenterManageComponent } from './data-center-manage/data-center-manage.component';
import { StructCablingComponent } from './struct-cabling/struct-cabling.component';
import { WebDesignDevelopComponent } from './web-design-develop/web-design-develop.component';
import { MobileAppDevelopComponent } from './mobile-app-develop/mobile-app-develop.component';
import { GameAppDevelopComponent } from './game-app-develop/game-app-develop.component';
import { RecruitOutsourceComponent } from './recruit-outsource/recruit-outsource.component';
import { HrOutsourceComponent } from './hr-outsource/hr-outsource.component';
import { PayrollComponent } from './payroll/payroll.component';
import { TempPermanentStaffingComponent } from './temp-permanent-staffing/temp-permanent-staffing.component';
import { StatutoryComplainceComponent } from './statutory-complaince/statutory-complaince.component';
import { ServersComponent } from './servers/servers.component';
import { PersonalComputersComponent } from './personal-computers/personal-computers.component';
import { ProjectorsComponent } from './projectors/projectors.component';
import { PrintersScannersComponent } from './printers-scanners/printers-scanners.component';
import { ApplicationDevelopComponent } from './application-develop/application-develop.component';
import { SurveillanceSystemComponent } from './surveillance-system/surveillance-system.component';
import { SwitchesRoutersComponent } from './switches-routers/switches-routers.component';
import { ManagedWifiComponent } from './managed-wifi/managed-wifi.component';
import { StructuredCabelsComponent } from './structured-cabels/structured-cabels.component';
import { DataSecureFirewallComponent } from './data-secure-firewall/data-secure-firewall.component';
import { RightfaxServerComponent } from './rightfax-server/rightfax-server.component';
import { SchoolManagementSystemComponent } from './school-management-system/school-management-system.component';
import { DocumentManagementSystemComponent } from './document-management-system/document-management-system.component';
import { RetailManagementSystemComponent } from './retail-management-system/retail-management-system.component';
import { NoquCompanyComponent } from './noqu-company/noqu-company.component';
import { CountUpDirective } from './count-up.directive';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ItSupportResourceComponent } from './it-support-resource/it-support-resource.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'end-user-computing',
    component: EndUserComputingComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'cloud-infra',
    component: CloudInfraComponent
  },
  {
    path: 'network-server-admin',
    component: NetworkServerAdminComponent
  },
  {
    path: 'security-survillaince',
    component: SecureServillianceSysComponent
  },
  {
    path: 'data-center-manage',
    component: DataCenterManageComponent
  },
  {
    path: 'struct-cabling',
    component: StructCablingComponent
  },
  {
    path: 'web-design-develop',
    component: WebDesignDevelopComponent
  },
  {
    path: 'mobile-app-develop',
    component: MobileAppDevelopComponent
  },
  {
    path: 'game-app-develop',
    component: GameAppDevelopComponent
  },
  {
    path: 'recruit-outsource',
    component: RecruitOutsourceComponent
  },
  {
    path: 'hr-outsource',
    component: HrOutsourceComponent
  },
  {
    path: 'payroll',
    component: PayrollComponent
  },
  {
    path: 'temp-per-staffing',
    component: TempPermanentStaffingComponent
  },
  {
    path: 'statutory-complaince',
    component: StatutoryComplainceComponent
  },
  {
    path: 'servers',
    component: ServersComponent
  },
  {
    path: 'personal-computers',
    component: PersonalComputersComponent
  },
  {
    path: 'projectors',
    component: ProjectorsComponent
  },
  {
    path: 'printers-scanners',
    component: PrintersScannersComponent
  },
  {
    path: 'application-develop',
    component: ApplicationDevelopComponent
  },
  {
    path: 'surveillance-system',
    component: SurveillanceSystemComponent
  },
  {
    path: 'switches-routers',
    component: SwitchesRoutersComponent
  },
  {
    path: 'managed-wifi',
    component: ManagedWifiComponent
  },
  {
    path: 'structured-cables',
    component: StructuredCabelsComponent
  },
  {
    path: 'data-secure-firewall',
    component: DataSecureFirewallComponent
  },
  {
    path: 'rightfax-server',
    component: RightfaxServerComponent
  },
  {
    path: 'school-management-system',
    component: SchoolManagementSystemComponent
  },
  {
    path: 'document-management-system',
    component: DocumentManagementSystemComponent
  },
  {
    path: 'retail-management-system',
    component: RetailManagementSystemComponent
  },
  {
    path: 'noqu',
    component: NoquCompanyComponent
  },
  {
    path: 'it-support-resource',
    component: ItSupportResourceComponent
  }
]


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    EndUserComputingComponent,
    AboutUsComponent,
    CareersComponent,
    ContactUsComponent,
    CloudInfraComponent,
    NetworkServerAdminComponent,
    SecureServillianceSysComponent,
    DataCenterManageComponent,
    StructCablingComponent,
    WebDesignDevelopComponent,
    MobileAppDevelopComponent,
    GameAppDevelopComponent,
    RecruitOutsourceComponent,
    HrOutsourceComponent,
    PayrollComponent,
    TempPermanentStaffingComponent,
    StatutoryComplainceComponent,
    ServersComponent,
    PersonalComputersComponent,
    ProjectorsComponent,
    PrintersScannersComponent,
    ApplicationDevelopComponent,
    SurveillanceSystemComponent,
    SwitchesRoutersComponent,
    ManagedWifiComponent,
    StructuredCabelsComponent,
    DataSecureFirewallComponent,
    RightfaxServerComponent,
    SchoolManagementSystemComponent,
    DocumentManagementSystemComponent,
    RetailManagementSystemComponent,
    NoquCompanyComponent,
    CountUpDirective,
    ItSupportResourceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CardModule,
    TooltipModule,
    CarouselModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    InputTextareaModule,
  ]
})
export class PagesModule { }
