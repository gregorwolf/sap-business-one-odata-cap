/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Campaigns } from './Campaigns';
import { CampaignsRequestBuilder } from './CampaignsRequestBuilder';
import { TargetGroupsApi } from './TargetGroupsApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { Attachments2Api } from './Attachments2Api';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { CampaignBusinessPartner } from './CampaignBusinessPartner';
import { CampaignItem } from './CampaignItem';
import { CampaignPartner } from './CampaignPartner';
import { CampaignTypeEnum } from './CampaignTypeEnum';
import { CampaignStatusEnum } from './CampaignStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { TargetGroupTypeEnum } from './TargetGroupTypeEnum';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CampaignsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Campaigns<DeSerializersT>, DeSerializersT>
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
  ): CampaignsApi<DeSerializersT> {
    return new CampaignsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link targetGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_GROUP_2: OneToOneLink<
      Campaigns<DeSerializersT>,
      DeSerializersT,
      TargetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Campaigns<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      Campaigns<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Campaigns<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TargetGroupsApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TARGET_GROUP_2: new OneToOneLink('TargetGroup2', this, linkedApis[0]),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[1]),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[2]),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = Campaigns;

  requestBuilder(): CampaignsRequestBuilder<DeSerializersT> {
    return new CampaignsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Campaigns<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Campaigns<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Campaigns<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Campaigns, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Campaigns, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CAMPAIGN_NUMBER: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CAMPAIGN_NAME: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAMPAIGN_TYPE: EnumField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      CampaignTypeEnum,
      true,
      true
    >;
    TARGET_GROUP: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNER: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STATUS: EnumField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      CampaignStatusEnum,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FINISH_DATE: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERATED_BY_WIZARD: EnumField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ATTACHEMENTS_ENTRY: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TARGET_GROUP_TYPE: EnumField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      TargetGroupTypeEnum,
      true,
      true
    >;
    U_ZIEL: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ZIELGRUPPE: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PRODUKT: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STUFE_1: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STUFE_1_DATUM: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_STUFE_2: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STUFE_2_DATUM: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_STUFE_3: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STUFE_3_DATUM: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_STUFE_4: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STUFE_4_DATUM: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_STUFE_5: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STUFE_5_DATUM: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_UMSATZ: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DB: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_KOSTEN: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_STATUS: OrderableEdmTypeField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAMPAIGN_BUSINESS_PARTNERS: CollectionField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      CampaignBusinessPartner,
      true,
      true
    >;
    CAMPAIGN_ITEMS: CollectionField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      CampaignItem,
      true,
      true
    >;
    CAMPAIGN_PARTNERS: CollectionField<
      Campaigns<DeSerializers>,
      DeSerializersT,
      CampaignPartner,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_GROUP_2: OneToOneLink<
      Campaigns<DeSerializersT>,
      DeSerializersT,
      TargetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Campaigns<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      Campaigns<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Campaigns<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Campaigns<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link campaignNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_NUMBER: fieldBuilder.buildEdmTypeField(
          'CampaignNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link campaignName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_NAME: fieldBuilder.buildEdmTypeField(
          'CampaignName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link campaignType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_TYPE: fieldBuilder.buildEnumField(
          'CampaignType',
          CampaignTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link targetGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_GROUP: fieldBuilder.buildEdmTypeField(
          'TargetGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEdmTypeField('Owner', 'Edm.Int32', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', CampaignStatusEnum, true),
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
         * Static representation of the {@link finishDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINISH_DATE: fieldBuilder.buildEdmTypeField(
          'FinishDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link generatedByWizard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATED_BY_WIZARD: fieldBuilder.buildEnumField(
          'GeneratedByWizard',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link attachementsEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHEMENTS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachementsEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link targetGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_GROUP_TYPE: fieldBuilder.buildEnumField(
          'TargetGroupType',
          TargetGroupTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link uZiel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZIEL: fieldBuilder.buildEdmTypeField('U_Ziel', 'Edm.String', true),
        /**
         * Static representation of the {@link uZielgruppe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZIELGRUPPE: fieldBuilder.buildEdmTypeField(
          'U_Zielgruppe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uProdukt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PRODUKT: fieldBuilder.buildEdmTypeField(
          'U_Produkt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uStufe1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_1: fieldBuilder.buildEdmTypeField(
          'U_Stufe1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uStufe1Datum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_1_DATUM: fieldBuilder.buildEdmTypeField(
          'U_Stufe1Datum',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uStufe2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_2: fieldBuilder.buildEdmTypeField(
          'U_Stufe2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uStufe2Datum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_2_DATUM: fieldBuilder.buildEdmTypeField(
          'U_Stufe2Datum',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uStufe3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_3: fieldBuilder.buildEdmTypeField(
          'U_Stufe3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uStufe3Datum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_3_DATUM: fieldBuilder.buildEdmTypeField(
          'U_Stufe3Datum',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uStufe4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_4: fieldBuilder.buildEdmTypeField(
          'U_Stufe4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uStufe4Datum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_4_DATUM: fieldBuilder.buildEdmTypeField(
          'U_Stufe4Datum',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uStufe5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_5: fieldBuilder.buildEdmTypeField(
          'U_Stufe5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uStufe5Datum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STUFE_5_DATUM: fieldBuilder.buildEdmTypeField(
          'U_Stufe5Datum',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uUmsatz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UMSATZ: fieldBuilder.buildEdmTypeField('U_Umsatz', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uDb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DB: fieldBuilder.buildEdmTypeField('U_DB', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uKosten} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_KOSTEN: fieldBuilder.buildEdmTypeField('U_Kosten', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STATUS: fieldBuilder.buildEdmTypeField(
          'U_Status',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link campaignBusinessPartners} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_BUSINESS_PARTNERS: fieldBuilder.buildCollectionField(
          'CampaignBusinessPartners',
          CampaignBusinessPartner,
          true
        ),
        /**
         * Static representation of the {@link campaignItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_ITEMS: fieldBuilder.buildCollectionField(
          'CampaignItems',
          CampaignItem,
          true
        ),
        /**
         * Static representation of the {@link campaignPartners} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_PARTNERS: fieldBuilder.buildCollectionField(
          'CampaignPartners',
          CampaignPartner,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Campaigns)
      };
    }

    return this._schema;
  }
}
