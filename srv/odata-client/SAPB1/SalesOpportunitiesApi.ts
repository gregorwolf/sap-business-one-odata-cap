/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOpportunities } from './SalesOpportunities';
import { SalesOpportunitiesRequestBuilder } from './SalesOpportunitiesRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { SalesPersonsApi } from './SalesPersonsApi';
import { SalesOpportunitySourcesSetupApi } from './SalesOpportunitySourcesSetupApi';
import { SalesOpportunityInterestsSetupApi } from './SalesOpportunityInterestsSetupApi';
import { SalesOpportunityReasonsSetupApi } from './SalesOpportunityReasonsSetupApi';
import { SalesStagesApi } from './SalesStagesApi';
import { IndustriesApi } from './IndustriesApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { ProjectsApi } from './ProjectsApi';
import { UsersApi } from './UsersApi';
import { TerritoriesApi } from './TerritoriesApi';
import { SalesOpportunitiesLine } from './SalesOpportunitiesLine';
import { SalesOpportunitiesCompetitionItem } from './SalesOpportunitiesCompetitionItem';
import { SalesOpportunitiesPartner } from './SalesOpportunitiesPartner';
import { SalesOpportunitiesInterest } from './SalesOpportunitiesInterest';
import { SalesOpportunitiesReason } from './SalesOpportunitiesReason';
import { BoSoOsStatus } from './BoSoOsStatus';
import { BoSoClosedInTypes } from './BoSoClosedInTypes';
import { OpportunityTypeEnum } from './OpportunityTypeEnum';
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
  Time,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesOpportunitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOpportunities<DeSerializersT>, DeSerializersT>
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
  ): SalesOpportunitiesApi<DeSerializersT> {
    return new SalesOpportunitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON_2: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOpportunitySourceSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITY_SOURCE_SETUP: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitySourcesSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOpportunityInterestSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITY_INTEREST_SETUP: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesOpportunityInterestsSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOpportunityReasonSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITY_REASON_SETUP: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesOpportunityReasonsSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesStage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_STAGE: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesStagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link industry2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INDUSTRY_2: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      IndustriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link territory2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERRITORY_2: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      TerritoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnersApi<DeSerializersT>,
      SalesPersonsApi<DeSerializersT>,
      SalesOpportunitySourcesSetupApi<DeSerializersT>,
      SalesOpportunityInterestsSetupApi<DeSerializersT>,
      SalesOpportunityReasonsSetupApi<DeSerializersT>,
      SalesStagesApi<DeSerializersT>,
      IndustriesApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      TerritoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[0]
      ),
      SALES_PERSON_2: new OneToOneLink('SalesPerson2', this, linkedApis[1]),
      SALES_OPPORTUNITY_SOURCE_SETUP: new OneToOneLink(
        'SalesOpportunitySourceSetup',
        this,
        linkedApis[2]
      ),
      SALES_OPPORTUNITY_INTEREST_SETUP: new OneToOneLink(
        'SalesOpportunityInterestSetup',
        this,
        linkedApis[3]
      ),
      SALES_OPPORTUNITY_REASON_SETUP: new OneToOneLink(
        'SalesOpportunityReasonSetup',
        this,
        linkedApis[4]
      ),
      SALES_STAGE: new OneToOneLink('SalesStage', this, linkedApis[5]),
      INDUSTRY_2: new OneToOneLink('Industry2', this, linkedApis[6]),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[7]),
      PROJECT: new OneToOneLink('Project', this, linkedApis[8]),
      USER: new OneToOneLink('User', this, linkedApis[9]),
      TERRITORY_2: new OneToOneLink('Territory2', this, linkedApis[10])
    };
    return this;
  }

  entityConstructor = SalesOpportunities;

  requestBuilder(): SalesOpportunitiesRequestBuilder<DeSerializersT> {
    return new SalesOpportunitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOpportunities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesOpportunities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOpportunities<DeSerializersT>,
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
    typeof SalesOpportunities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOpportunities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEQUENTIAL_NO: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PERSON: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CONTACT_PERSON: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SOURCE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INTEREST_FIELD_1: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INTEREST_FIELD_2: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INTEREST_FIELD_3: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INTEREST_LEVEL: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PREDICTED_CLOSING_DATE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MAX_LOCAL_TOTAL: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAX_SYSTEM_TOTAL: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WEIGHTED_SUM_LC: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WEIGHTED_SUM_SC: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    GROSS_PROFIT: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    GROSS_PROFIT_TOTAL_LOCAL: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    GROSS_PROFIT_TOTAL_SYSTEM: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      BoSoOsStatus,
      true,
      true
    >;
    REASON_FOR_CLOSING: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TOTAL_AMOUNT_LOCAL: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_AMOUN_SYSTEM: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CLOSING_GROSS_PROFIT_LOCAL: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CLOSING_GROSS_PROFIT_SYSTEM: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CLOSING_PERCENTAGE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CURRENT_STAGE_NO: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CURRENT_STAGE_NUMBER: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OPPORTUNITY_NAME: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDUSTRY: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LINKED_DOCUMENT_TYPE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_OWNERSHIPFIELD: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STATUS_REMARKS: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CODE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_CHANEL_NAME: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SIGNATURE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_CHECKBOX: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINKED_DOCUMENT_NUMBER: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TERRITORY: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CLOSING_DATE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BP_CHANNEL_CONTACT: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BP_CHANEL_CODE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSING_TYPE: EnumField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      BoSoClosedInTypes,
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OPPORTUNITY_TYPE: EnumField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      OpportunityTypeEnum,
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_TIME: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_AKTIVITAET: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_ANBIETEN: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_ROHRE_FT: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_KANAL_FT: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_FLACHKANAL: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_1: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_2: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_3: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_4: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_5: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70409: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70022: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70006: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70108: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_79862: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70043: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70101: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70233: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70195: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70178: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70137: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70017: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70511: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70034: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_79527: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70378: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_80206: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LA_S_70029: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OBJEKTREPORT: OrderableEdmTypeField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_OPPORTUNITIES_LINES: CollectionField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      SalesOpportunitiesLine,
      true,
      true
    >;
    SALES_OPPORTUNITIES_COMPETITION: CollectionField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      SalesOpportunitiesCompetitionItem,
      true,
      true
    >;
    SALES_OPPORTUNITIES_PARTNERS: CollectionField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      SalesOpportunitiesPartner,
      true,
      true
    >;
    SALES_OPPORTUNITIES_INTERESTS: CollectionField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      SalesOpportunitiesInterest,
      true,
      true
    >;
    SALES_OPPORTUNITIES_REASONS: CollectionField<
      SalesOpportunities<DeSerializers>,
      DeSerializersT,
      SalesOpportunitiesReason,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON_2: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOpportunitySourceSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITY_SOURCE_SETUP: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitySourcesSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOpportunityInterestSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITY_INTEREST_SETUP: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesOpportunityInterestsSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOpportunityReasonSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITY_REASON_SETUP: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesOpportunityReasonsSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesStage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_STAGE: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      SalesStagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link industry2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INDUSTRY_2: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      IndustriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link territory2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERRITORY_2: OneToOneLink<
      SalesOpportunities<DeSerializersT>,
      DeSerializersT,
      TerritoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOpportunities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sequentialNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENTIAL_NO: fieldBuilder.buildEdmTypeField(
          'SequentialNo',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cardCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_CODE: fieldBuilder.buildEdmTypeField(
          'CardCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PERSON: fieldBuilder.buildEdmTypeField(
          'SalesPerson',
          'Edm.Int32',
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
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEdmTypeField('Source', 'Edm.Int32', true),
        /**
         * Static representation of the {@link interestField1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_FIELD_1: fieldBuilder.buildEdmTypeField(
          'InterestField1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link interestField2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_FIELD_2: fieldBuilder.buildEdmTypeField(
          'InterestField2',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link interestField3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_FIELD_3: fieldBuilder.buildEdmTypeField(
          'InterestField3',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link interestLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_LEVEL: fieldBuilder.buildEdmTypeField(
          'InterestLevel',
          'Edm.Int32',
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
         * Static representation of the {@link predictedClosingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREDICTED_CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'PredictedClosingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link maxLocalTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_LOCAL_TOTAL: fieldBuilder.buildEdmTypeField(
          'MaxLocalTotal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maxSystemTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_SYSTEM_TOTAL: fieldBuilder.buildEdmTypeField(
          'MaxSystemTotal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link weightedSumLc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHTED_SUM_LC: fieldBuilder.buildEdmTypeField(
          'WeightedSumLC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link weightedSumSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHTED_SUM_SC: fieldBuilder.buildEdmTypeField(
          'WeightedSumSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link grossProfit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PROFIT: fieldBuilder.buildEdmTypeField(
          'GrossProfit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link grossProfitTotalLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PROFIT_TOTAL_LOCAL: fieldBuilder.buildEdmTypeField(
          'GrossProfitTotalLocal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link grossProfitTotalSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PROFIT_TOTAL_SYSTEM: fieldBuilder.buildEdmTypeField(
          'GrossProfitTotalSystem',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', BoSoOsStatus, true),
        /**
         * Static representation of the {@link reasonForClosing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_FOR_CLOSING: fieldBuilder.buildEdmTypeField(
          'ReasonForClosing',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link totalAmountLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AMOUNT_LOCAL: fieldBuilder.buildEdmTypeField(
          'TotalAmountLocal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalAmounSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AMOUN_SYSTEM: fieldBuilder.buildEdmTypeField(
          'TotalAmounSystem',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link closingGrossProfitLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_GROSS_PROFIT_LOCAL: fieldBuilder.buildEdmTypeField(
          'ClosingGrossProfitLocal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link closingGrossProfitSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_GROSS_PROFIT_SYSTEM: fieldBuilder.buildEdmTypeField(
          'ClosingGrossProfitSystem',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link closingPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ClosingPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link currentStageNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_STAGE_NO: fieldBuilder.buildEdmTypeField(
          'CurrentStageNo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link currentStageNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_STAGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CurrentStageNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link opportunityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPPORTUNITY_NAME: fieldBuilder.buildEdmTypeField(
          'OpportunityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link industry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY: fieldBuilder.buildEdmTypeField('Industry', 'Edm.Int32', true),
        /**
         * Static representation of the {@link linkedDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'LinkedDocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataOwnershipfield} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_OWNERSHIPFIELD: fieldBuilder.buildEdmTypeField(
          'DataOwnershipfield',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link statusRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_REMARKS: fieldBuilder.buildEdmTypeField(
          'StatusRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CODE: fieldBuilder.buildEdmTypeField(
          'ProjectCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpChanelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CHANEL_NAME: fieldBuilder.buildEdmTypeField(
          'BPChanelName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link customerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentCheckbox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CHECKBOX: fieldBuilder.buildEdmTypeField(
          'DocumentCheckbox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linkedDocumentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'LinkedDocumentNumber',
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
         * Static representation of the {@link closingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'ClosingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link bpChannelContact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CHANNEL_CONTACT: fieldBuilder.buildEdmTypeField(
          'BPChannelContact',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bpChanelCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CHANEL_CODE: fieldBuilder.buildEdmTypeField(
          'BPChanelCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_TYPE: fieldBuilder.buildEnumField(
          'ClosingType',
          BoSoClosedInTypes,
          true
        ),
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
         * Static representation of the {@link opportunityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPPORTUNITY_TYPE: fieldBuilder.buildEnumField(
          'OpportunityType',
          OpportunityTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link updateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_TIME: fieldBuilder.buildEdmTypeField(
          'UpdateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uAktivitaet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AKTIVITAET: fieldBuilder.buildEdmTypeField(
          'U_Aktivitaet',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uAnbieten} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ANBIETEN: fieldBuilder.buildEdmTypeField(
          'U_anbieten',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaRohreFt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_ROHRE_FT: fieldBuilder.buildEdmTypeField(
          'U_LA_Rohre_FT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaKanalFt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_KANAL_FT: fieldBuilder.buildEdmTypeField(
          'U_LA_Kanal_FT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaFlachkanal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_FLACHKANAL: fieldBuilder.buildEdmTypeField(
          'U_LA_Flachkanal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLa1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_1: fieldBuilder.buildEdmTypeField('U_LA_1', 'Edm.String', true),
        /**
         * Static representation of the {@link uLa2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_2: fieldBuilder.buildEdmTypeField('U_LA_2', 'Edm.String', true),
        /**
         * Static representation of the {@link uLa3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_3: fieldBuilder.buildEdmTypeField('U_LA_3', 'Edm.String', true),
        /**
         * Static representation of the {@link uLa4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_4: fieldBuilder.buildEdmTypeField('U_LA_4', 'Edm.String', true),
        /**
         * Static representation of the {@link uLa5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_5: fieldBuilder.buildEdmTypeField('U_LA_5', 'Edm.String', true),
        /**
         * Static representation of the {@link uLaS70409} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70409: fieldBuilder.buildEdmTypeField(
          'U_LA_S70409',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70022} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70022: fieldBuilder.buildEdmTypeField(
          'U_LA_S70022',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70006} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70006: fieldBuilder.buildEdmTypeField(
          'U_LA_S70006',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70108} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70108: fieldBuilder.buildEdmTypeField(
          'U_LA_S70108',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS79862} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_79862: fieldBuilder.buildEdmTypeField(
          'U_LA_S79862',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70043} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70043: fieldBuilder.buildEdmTypeField(
          'U_LA_S70043',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70101} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70101: fieldBuilder.buildEdmTypeField(
          'U_LA_S70101',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70233} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70233: fieldBuilder.buildEdmTypeField(
          'U_LA_S70233',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70195} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70195: fieldBuilder.buildEdmTypeField(
          'U_LA_S70195',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70178} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70178: fieldBuilder.buildEdmTypeField(
          'U_LA_S70178',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70137} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70137: fieldBuilder.buildEdmTypeField(
          'U_LA_S70137',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70017} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70017: fieldBuilder.buildEdmTypeField(
          'U_LA_S70017',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70511} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70511: fieldBuilder.buildEdmTypeField(
          'U_LA_S70511',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70034} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70034: fieldBuilder.buildEdmTypeField(
          'U_LA_S70034',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS79527} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_79527: fieldBuilder.buildEdmTypeField(
          'U_LA_S79527',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70378} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70378: fieldBuilder.buildEdmTypeField(
          'U_LA_S70378',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS80206} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_80206: fieldBuilder.buildEdmTypeField(
          'U_LA_S80206',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLaS70029} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LA_S_70029: fieldBuilder.buildEdmTypeField(
          'U_LA_S70029',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uObjektreport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OBJEKTREPORT: fieldBuilder.buildEdmTypeField(
          'U_Objektreport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOpportunitiesLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OPPORTUNITIES_LINES: fieldBuilder.buildCollectionField(
          'SalesOpportunitiesLines',
          SalesOpportunitiesLine,
          true
        ),
        /**
         * Static representation of the {@link salesOpportunitiesCompetition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OPPORTUNITIES_COMPETITION: fieldBuilder.buildCollectionField(
          'SalesOpportunitiesCompetition',
          SalesOpportunitiesCompetitionItem,
          true
        ),
        /**
         * Static representation of the {@link salesOpportunitiesPartners} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OPPORTUNITIES_PARTNERS: fieldBuilder.buildCollectionField(
          'SalesOpportunitiesPartners',
          SalesOpportunitiesPartner,
          true
        ),
        /**
         * Static representation of the {@link salesOpportunitiesInterests} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OPPORTUNITIES_INTERESTS: fieldBuilder.buildCollectionField(
          'SalesOpportunitiesInterests',
          SalesOpportunitiesInterest,
          true
        ),
        /**
         * Static representation of the {@link salesOpportunitiesReasons} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OPPORTUNITIES_REASONS: fieldBuilder.buildCollectionField(
          'SalesOpportunitiesReasons',
          SalesOpportunitiesReason,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOpportunities)
      };
    }

    return this._schema;
  }
}
