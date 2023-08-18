/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceContracts } from './ServiceContracts';
import { ServiceContractsRequestBuilder } from './ServiceContractsRequestBuilder';
import { ServiceCallsApi } from './ServiceCallsApi';
import { CustomerEquipmentCardsApi } from './CustomerEquipmentCardsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { UsersApi } from './UsersApi';
import { ContractTemplatesApi } from './ContractTemplatesApi';
import { Attachments2Api } from './Attachments2Api';
import { ServiceContractLine } from './ServiceContractLine';
import { BoSvcContractStatus } from './BoSvcContractStatus';
import { BoContractTypes } from './BoContractTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoServiceTypes } from './BoServiceTypes';
import { BoResponseUnit } from './BoResponseUnit';
import { ServiceTypeEnum } from './ServiceTypeEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ServiceContractsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ServiceContracts<DeSerializersT>, DeSerializersT>
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
  ): ServiceContractsApi<DeSerializersT> {
    return new ServiceContractsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contractTemplate2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACT_TEMPLATE_2: OneToOneLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      ContractTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ServiceCallsApi<DeSerializersT>,
      CustomerEquipmentCardsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      ContractTemplatesApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SERVICE_CALLS: new OneToManyLink('ServiceCalls', this, linkedApis[0]),
      CUSTOMER_EQUIPMENT_CARDS: new OneToManyLink(
        'CustomerEquipmentCards',
        this,
        linkedApis[1]
      ),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[2]
      ),
      USER: new OneToOneLink('User', this, linkedApis[3]),
      CONTRACT_TEMPLATE_2: new OneToOneLink(
        'ContractTemplate2',
        this,
        linkedApis[4]
      ),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = ServiceContracts;

  requestBuilder(): ServiceContractsRequestBuilder<DeSerializersT> {
    return new ServiceContractsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceContracts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ServiceContracts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ServiceContracts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ServiceContracts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceContracts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONTRACT_ID: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_CODE: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_CODE: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OWNER: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STATUS: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoSvcContractStatus,
      true,
      true
    >;
    CONTRACT_TEMPLATE: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_TYPE: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoContractTypes,
      true,
      true
    >;
    RENEWAL: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REMINDER_TIME: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REMIND_UNIT: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoRemindUnits,
      true,
      true
    >;
    DURATION_OF_COVERAGE: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RESOLUTION_TIME: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RESOLUTION_UNIT: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoResolutionUnits,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONDAY_ENABLED: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TUESDAY_ENABLED: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WEDNESDAY_ENABLED: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    THURSDAY_ENABLED: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FRIDAY_ENABLED: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SATURDAY_ENABLED: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SUNDAY_ENABLED: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MONDAY_START: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    MONDAY_END: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    TUESDAY_START: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    TUESDAY_END: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    WEDNESDAY_START: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    WEDNESDAY_END: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    THURSDAY_START: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    THURSDAY_END: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    FRIDAY_START: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    FRIDAY_END: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SATURDAY_START: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SATURDAY_END: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SUNDAY_START: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SUNDAY_END: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    INCLUDE_PARTS: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_LABOR: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_TRAVEL: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TEMPLATE_REMARKS: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_HOLIDAYS: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SERVICE_TYPE: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoServiceTypes,
      true,
      true
    >;
    RESPONSE_UNIT: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      BoResponseUnit,
      true,
      true
    >;
    RESPONSE_TIME: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TERMINATION_DATE: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERVICE_BP_TYPE: EnumField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      ServiceTypeEnum,
      true,
      true
    >;
    SERVICE_CONTRACT_LINES: CollectionField<
      ServiceContracts<DeSerializers>,
      DeSerializersT,
      ServiceContractLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contractTemplate2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACT_TEMPLATE_2: OneToOneLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      ContractTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ServiceContracts<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ServiceContracts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ContractID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerCode',
          'Edm.String',
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
         * Static representation of the {@link contactCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_CODE: fieldBuilder.buildEdmTypeField(
          'ContactCode',
          'Edm.Int32',
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
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BoSvcContractStatus,
          true
        ),
        /**
         * Static representation of the {@link contractTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'ContractTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_TYPE: fieldBuilder.buildEnumField(
          'ContractType',
          BoContractTypes,
          true
        ),
        /**
         * Static representation of the {@link renewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL: fieldBuilder.buildEnumField('Renewal', BoYesNoEnum, true),
        /**
         * Static representation of the {@link reminderTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_TIME: fieldBuilder.buildEdmTypeField(
          'ReminderTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link remindUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMIND_UNIT: fieldBuilder.buildEnumField(
          'RemindUnit',
          BoRemindUnits,
          true
        ),
        /**
         * Static representation of the {@link durationOfCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_OF_COVERAGE: fieldBuilder.buildEdmTypeField(
          'DurationOfCoverage',
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link resolutionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_TIME: fieldBuilder.buildEdmTypeField(
          'ResolutionTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link resolutionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_UNIT: fieldBuilder.buildEnumField(
          'ResolutionUnit',
          BoResolutionUnits,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mondayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_ENABLED: fieldBuilder.buildEnumField(
          'MondayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link tuesdayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_ENABLED: fieldBuilder.buildEnumField(
          'TuesdayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link wednesdayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_ENABLED: fieldBuilder.buildEnumField(
          'WednesdayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link thursdayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_ENABLED: fieldBuilder.buildEnumField(
          'ThursdayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link fridayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_ENABLED: fieldBuilder.buildEnumField(
          'FridayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link saturdayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_ENABLED: fieldBuilder.buildEnumField(
          'SaturdayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link sundayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_ENABLED: fieldBuilder.buildEnumField(
          'SundayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link mondayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_START: fieldBuilder.buildEdmTypeField(
          'MondayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link mondayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_END: fieldBuilder.buildEdmTypeField(
          'MondayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link tuesdayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_START: fieldBuilder.buildEdmTypeField(
          'TuesdayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link tuesdayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_END: fieldBuilder.buildEdmTypeField(
          'TuesdayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link wednesdayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_START: fieldBuilder.buildEdmTypeField(
          'WednesdayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link wednesdayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_END: fieldBuilder.buildEdmTypeField(
          'WednesdayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link thursdayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_START: fieldBuilder.buildEdmTypeField(
          'ThursdayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link thursdayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_END: fieldBuilder.buildEdmTypeField(
          'ThursdayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link fridayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_START: fieldBuilder.buildEdmTypeField(
          'FridayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link fridayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_END: fieldBuilder.buildEdmTypeField(
          'FridayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link saturdayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_START: fieldBuilder.buildEdmTypeField(
          'SaturdayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link saturdayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_END: fieldBuilder.buildEdmTypeField(
          'SaturdayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link sundayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_START: fieldBuilder.buildEdmTypeField(
          'SundayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link sundayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_END: fieldBuilder.buildEdmTypeField(
          'SundayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link includeParts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PARTS: fieldBuilder.buildEnumField(
          'IncludeParts',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link includeLabor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_LABOR: fieldBuilder.buildEnumField(
          'IncludeLabor',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link includeTravel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_TRAVEL: fieldBuilder.buildEnumField(
          'IncludeTravel',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link templateRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_REMARKS: fieldBuilder.buildEdmTypeField(
          'TemplateRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link includeHolidays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_HOLIDAYS: fieldBuilder.buildEnumField(
          'IncludeHolidays',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link serviceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TYPE: fieldBuilder.buildEnumField(
          'ServiceType',
          BoServiceTypes,
          true
        ),
        /**
         * Static representation of the {@link responseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_UNIT: fieldBuilder.buildEnumField(
          'ResponseUnit',
          BoResponseUnit,
          true
        ),
        /**
         * Static representation of the {@link responseTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_TIME: fieldBuilder.buildEdmTypeField(
          'ResponseTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link terminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINATION_DATE: fieldBuilder.buildEdmTypeField(
          'TerminationDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link serviceBpType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_BP_TYPE: fieldBuilder.buildEnumField(
          'ServiceBPType',
          ServiceTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link serviceContractLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CONTRACT_LINES: fieldBuilder.buildCollectionField(
          'ServiceContract_Lines',
          ServiceContractLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceContracts)
      };
    }

    return this._schema;
  }
}
