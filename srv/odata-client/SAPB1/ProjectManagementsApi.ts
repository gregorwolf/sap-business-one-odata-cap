/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectManagements } from './ProjectManagements';
import { ProjectManagementsRequestBuilder } from './ProjectManagementsRequestBuilder';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { TerritoriesApi } from './TerritoriesApi';
import { SalesPersonsApi } from './SalesPersonsApi';
import { ProjectsApi } from './ProjectsApi';
import { IndustriesApi } from './IndustriesApi';
import { Attachments2Api } from './Attachments2Api';
import { PmStageData } from './PmStageData';
import { PmOpenIssueData } from './PmOpenIssueData';
import { PmDocumentData } from './PmDocumentData';
import { PmActivityData } from './PmActivityData';
import { PmWorkOrderData } from './PmWorkOrderData';
import { PmSummaryData, PmSummaryDataField } from './PmSummaryData';
import { PmDocAttachement } from './PmDocAttachement';
import { PmStageAttachement } from './PmStageAttachement';
import { ProjectTypeEnum } from './ProjectTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ProjectStatusTypeEnum } from './ProjectStatusTypeEnum';
import { RiskLevelTypeEnum } from './RiskLevelTypeEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjectManagementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectManagements<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ProjectManagementsApi<DeSerializersT> {
    return new ProjectManagementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER_2: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link territory2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERRITORY_2: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      TerritoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link industry2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INDUSTRY_2: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      IndustriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EmployeesInfoApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      TerritoriesApi<DeSerializersT>,
      SalesPersonsApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      IndustriesApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[0]),
      BUSINESS_PARTNER_2: new OneToOneLink(
        'BusinessPartner2',
        this,
        linkedApis[1]
      ),
      TERRITORY_2: new OneToOneLink('Territory2', this, linkedApis[2]),
      SALES_PERSON: new OneToOneLink('SalesPerson', this, linkedApis[3]),
      PROJECT: new OneToOneLink('Project', this, linkedApis[4]),
      INDUSTRY_2: new OneToOneLink('Industry2', this, linkedApis[5]),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = ProjectManagements;

  requestBuilder(): ProjectManagementsRequestBuilder<DeSerializersT> {
    return new ProjectManagementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectManagements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectManagements<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectManagements<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProjectManagements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectManagements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OWNER: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PROJECT_NAME: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FINISHED_PERCENT: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PROJECT_TYPE: EnumField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      ProjectTypeEnum,
      true,
      true
    >;
    BUSINESS_PARTNER: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_NAME: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TERRITORY: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_EMPLOYEE: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALLOW_SUBPROJECTS: EnumField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROJECT_STATUS: EnumField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      ProjectStatusTypeEnum,
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CLOSING_DATE: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FINANCIAL_PROJECT: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RISK_LEVEL: EnumField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      RiskLevelTypeEnum,
      true,
      true
    >;
    INDUSTRY: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REASON: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PM_STAGES_COLLECTION: CollectionField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      PmStageData,
      true,
      true
    >;
    PM_OPEN_ISSUES_COLLECTION: CollectionField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      PmOpenIssueData,
      true,
      true
    >;
    PM_DOCUMENTS_COLLECTION: CollectionField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      PmDocumentData,
      true,
      true
    >;
    PM_ACTIVITIES_COLLECTION: CollectionField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      PmActivityData,
      true,
      true
    >;
    PM_WORK_ORDERS_COLLECTION: CollectionField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      PmWorkOrderData,
      true,
      true
    >;
    PM_SUMMARY_DATA: PmSummaryDataField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    PM_DOC_ATTACHEMENTS: CollectionField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      PmDocAttachement,
      true,
      true
    >;
    PM_STAGE_ATTACHEMENTS: CollectionField<
      ProjectManagements<DeSerializers>,
      DeSerializersT,
      PmStageAttachement,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER_2: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link territory2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERRITORY_2: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      TerritoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link industry2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INDUSTRY_2: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      IndustriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ProjectManagements<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectManagements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEdmTypeField('Owner', 'Edm.Int32', true),
        /**
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link finishedPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINISHED_PERCENT: fieldBuilder.buildEdmTypeField(
          'FinishedPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link projectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TYPE: fieldBuilder.buildEnumField(
          'ProjectType',
          ProjectTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link businessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'BusinessPartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_NAME: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON: fieldBuilder.buildEdmTypeField(
          'ContactPerson',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link territory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERRITORY: fieldBuilder.buildEdmTypeField(
          'Territory',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_EMPLOYEE: fieldBuilder.buildEdmTypeField(
          'SalesEmployee',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link allowSubprojects} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SUBPROJECTS: fieldBuilder.buildEnumField(
          'AllowSubprojects',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link projectStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_STATUS: fieldBuilder.buildEnumField(
          'ProjectStatus',
          ProjectStatusTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link closingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'ClosingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link financialProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_PROJECT: fieldBuilder.buildEdmTypeField(
          'FinancialProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link riskLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_LEVEL: fieldBuilder.buildEnumField(
          'RiskLevel',
          RiskLevelTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link industry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY: fieldBuilder.buildEdmTypeField('Industry', 'Edm.Int32', true),
        /**
         * Static representation of the {@link reason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON: fieldBuilder.buildEdmTypeField('Reason', 'Edm.String', true),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link pmStagesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PM_STAGES_COLLECTION: fieldBuilder.buildCollectionField(
          'PM_StagesCollection',
          PmStageData,
          true
        ),
        /**
         * Static representation of the {@link pmOpenIssuesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PM_OPEN_ISSUES_COLLECTION: fieldBuilder.buildCollectionField(
          'PM_OpenIssuesCollection',
          PmOpenIssueData,
          true
        ),
        /**
         * Static representation of the {@link pmDocumentsCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PM_DOCUMENTS_COLLECTION: fieldBuilder.buildCollectionField(
          'PM_DocumentsCollection',
          PmDocumentData,
          true
        ),
        /**
         * Static representation of the {@link pmActivitiesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PM_ACTIVITIES_COLLECTION: fieldBuilder.buildCollectionField(
          'PM_ActivitiesCollection',
          PmActivityData,
          true
        ),
        /**
         * Static representation of the {@link pmWorkOrdersCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PM_WORK_ORDERS_COLLECTION: fieldBuilder.buildCollectionField(
          'PM_WorkOrdersCollection',
          PmWorkOrderData,
          true
        ),
        /**
         * Static representation of the {@link pmSummaryData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PM_SUMMARY_DATA: fieldBuilder.buildComplexTypeField(
          'PM_SummaryData',
          PmSummaryDataField,
          true
        ),
        /**
         * Static representation of the {@link pmDocAttachements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PM_DOC_ATTACHEMENTS: fieldBuilder.buildCollectionField(
          'PM_DocAttachements',
          PmDocAttachement,
          true
        ),
        /**
         * Static representation of the {@link pmStageAttachements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PM_STAGE_ATTACHEMENTS: fieldBuilder.buildCollectionField(
          'PM_StageAttachements',
          PmStageAttachement,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectManagements)
      };
    }

    return this._schema;
  }
}
