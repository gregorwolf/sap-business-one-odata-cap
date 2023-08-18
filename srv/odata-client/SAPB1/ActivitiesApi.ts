/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Activities } from './Activities';
import { ActivitiesRequestBuilder } from './ActivitiesRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { ActivitySubjectsApi } from './ActivitySubjectsApi';
import { ActivityTypesApi } from './ActivityTypesApi';
import { ActivityLocationsApi } from './ActivityLocationsApi';
import { SalesPersonsApi } from './SalesPersonsApi';
import { UsersApi } from './UsersApi';
import { CountriesApi } from './CountriesApi';
import { ActivityStatusesApi } from './ActivityStatusesApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { ActivityRecipientListsApi } from './ActivityRecipientListsApi';
import { CheckInParams } from './CheckInParams';
import { ActivityMultipleRecipient } from './ActivityMultipleRecipient';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoMsgPriorities } from './BoMsgPriorities';
import { BoActivities } from './BoActivities';
import { BoDurations } from './BoDurations';
import { RecurrencePatternEnum } from './RecurrencePatternEnum';
import { EndTypeEnum } from './EndTypeEnum';
import { RepeatOptionEnum } from './RepeatOptionEnum';
import { BoAddressType } from './BoAddressType';
import { RecurrenceSequenceEnum } from './RecurrenceSequenceEnum';
import { RecurrenceDayOfWeekEnum } from './RecurrenceDayOfWeekEnum';
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
export class ActivitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Activities<DeSerializersT>, DeSerializersT>
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
  ): ActivitiesApi<DeSerializersT> {
    return new ActivitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activitySubject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_SUBJECT: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivitySubjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityType2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_TYPE_2: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivityTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_LOCATION: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivityLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_STATUS: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivityStatusesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityRecipientList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_RECIPIENT_LIST: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivityRecipientListsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnersApi<DeSerializersT>,
      ActivitySubjectsApi<DeSerializersT>,
      ActivityTypesApi<DeSerializersT>,
      ActivityLocationsApi<DeSerializersT>,
      SalesPersonsApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      ActivityStatusesApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      ActivityRecipientListsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[0]
      ),
      ACTIVITY_SUBJECT: new OneToOneLink(
        'ActivitySubject',
        this,
        linkedApis[1]
      ),
      ACTIVITY_TYPE_2: new OneToOneLink('ActivityType2', this, linkedApis[2]),
      ACTIVITY_LOCATION: new OneToOneLink(
        'ActivityLocation',
        this,
        linkedApis[3]
      ),
      SALES_PERSON: new OneToOneLink('SalesPerson', this, linkedApis[4]),
      USER: new OneToOneLink('User', this, linkedApis[5]),
      COUNTRY_2: new OneToOneLink('Country2', this, linkedApis[6]),
      ACTIVITY_STATUS: new OneToOneLink('ActivityStatus', this, linkedApis[7]),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[8]),
      ACTIVITY_RECIPIENT_LIST: new OneToOneLink(
        'ActivityRecipientList',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = Activities;

  requestBuilder(): ActivitiesRequestBuilder<DeSerializersT> {
    return new ActivitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Activities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Activities<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Activities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Activities, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Activities, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACTIVITY_CODE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_DATE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ACTIVITY_TIME: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CLOSED: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CLOSE_DATE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBJECT: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_TYPE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_ENTRY: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoMsgPriorities,
      true,
      true
    >;
    DETAILS: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_PROPERTY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoActivities,
      true,
      true
    >;
    ACTIVITY_TYPE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DURATION: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DURATION_TYPE: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoDurations,
      true,
      true
    >;
    SALES_EMPLOYEE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CONTACT_PERSON_CODE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HANDLED_BY: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REMINDER: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REMINDER_PERIOD: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    REMINDER_TYPE: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoDurations,
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONAL_FLAG: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_OBJECT_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PARENT_OBJECT_TYPE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOM: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INACTIVE_FLAG: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREVIOUS_ACTIVITY: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TENTATIVE_FLAG: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    END_DUE_DATE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOC_TYPE_EX: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RECURRENCE_PATTERN: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      RecurrencePatternEnum,
      true,
      true
    >;
    END_TYPE: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      EndTypeEnum,
      true,
      true
    >;
    SERIES_START_DATE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SERIES_END_DATE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MAX_OCCURRENCE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INTERVAL: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SUNDAY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MONDAY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TUESDAY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WEDNESDAY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    THURSDAY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FRIDAY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SATURDAY: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REPEAT_OPTION: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      RepeatOptionEnum,
      true,
      true
    >;
    BELONGED_SERIES_NUM: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IS_REMOVED: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ADDRESS_NAME: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TYPE: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      BoAddressType,
      true,
      true
    >;
    HANDLED_BY_EMPLOYEE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RECURRENCE_SEQUENCE_SPECIFIER: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      RecurrenceSequenceEnum,
      true,
      true
    >;
    RECURRENCE_DAY_IN_MONTH: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RECURRENCE_MONTH: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RECURRENCE_DAY_OF_WEEK: EnumField<
      Activities<DeSerializers>,
      DeSerializersT,
      RecurrenceDayOfWeekEnum,
      true,
      true
    >;
    SALES_OPPORTUNITY_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_OPPORTUNITY_LINE: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HANDLED_BY_RECIPIENT_LIST: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OFFICE_365_EVENT_ID: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_VERSION: OrderableEdmTypeField<
      Activities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CHECK_IN_LIST_PARAMS: CollectionField<
      Activities<DeSerializers>,
      DeSerializersT,
      CheckInParams,
      true,
      true
    >;
    ACTIVITY_MULTIPLE_RECIPIENTS: CollectionField<
      Activities<DeSerializers>,
      DeSerializersT,
      ActivityMultipleRecipient,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activitySubject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_SUBJECT: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivitySubjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityType2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_TYPE_2: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivityTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_LOCATION: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivityLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_STATUS: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivityStatusesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityRecipientList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_RECIPIENT_LIST: OneToOneLink<
      Activities<DeSerializersT>,
      DeSerializersT,
      ActivityRecipientListsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Activities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link activityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_CODE: fieldBuilder.buildEdmTypeField(
          'ActivityCode',
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
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link activityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_DATE: fieldBuilder.buildEdmTypeField(
          'ActivityDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link activityTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TIME: fieldBuilder.buildEdmTypeField(
          'ActivityTime',
          'Edm.TimeOfDay',
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
         * Static representation of the {@link closed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED: fieldBuilder.buildEnumField('Closed', BoYesNoEnum, true),
        /**
         * Static representation of the {@link closeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_DATE: fieldBuilder.buildEdmTypeField(
          'CloseDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
        /**
         * Static representation of the {@link subject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT: fieldBuilder.buildEdmTypeField('Subject', 'Edm.Int32', true),
        /**
         * Static representation of the {@link docType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE: fieldBuilder.buildEdmTypeField('DocType', 'Edm.String', true),
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.String', true),
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEnumField(
          'Priority',
          BoMsgPriorities,
          true
        ),
        /**
         * Static representation of the {@link details} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAILS: fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true),
        /**
         * Static representation of the {@link activityProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_PROPERTY: fieldBuilder.buildEnumField(
          'ActivityProperty',
          BoActivities,
          true
        ),
        /**
         * Static representation of the {@link activityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField(
          'ActivityType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField('Location', 'Edm.Int32', true),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link endTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TIME: fieldBuilder.buildEdmTypeField(
          'EndTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link duration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION: fieldBuilder.buildEdmTypeField(
          'Duration',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link durationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_TYPE: fieldBuilder.buildEnumField(
          'DurationType',
          BoDurations,
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
         * Static representation of the {@link contactPersonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_CODE: fieldBuilder.buildEdmTypeField(
          'ContactPersonCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link handledBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLED_BY: fieldBuilder.buildEdmTypeField(
          'HandledBy',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link reminder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER: fieldBuilder.buildEnumField('Reminder', BoYesNoEnum, true),
        /**
         * Static representation of the {@link reminderPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_PERIOD: fieldBuilder.buildEdmTypeField(
          'ReminderPeriod',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link reminderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_TYPE: fieldBuilder.buildEnumField(
          'ReminderType',
          BoDurations,
          true
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link personalFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_FLAG: fieldBuilder.buildEnumField(
          'PersonalFlag',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link parentObjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'ParentObjectId',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link parentObjectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_OBJECT_TYPE: fieldBuilder.buildEdmTypeField(
          'ParentObjectType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link room} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM: fieldBuilder.buildEdmTypeField('Room', 'Edm.String', true),
        /**
         * Static representation of the {@link inactiveFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE_FLAG: fieldBuilder.buildEnumField(
          'InactiveFlag',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link previousActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_ACTIVITY: fieldBuilder.buildEdmTypeField(
          'PreviousActivity',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.Int32', true),
        /**
         * Static representation of the {@link tentativeFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENTATIVE_FLAG: fieldBuilder.buildEnumField(
          'TentativeFlag',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link endDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'EndDueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link docTypeEx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE_EX: fieldBuilder.buildEdmTypeField(
          'DocTypeEx',
          'Edm.String',
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
         * Static representation of the {@link recurrencePattern} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_PATTERN: fieldBuilder.buildEnumField(
          'RecurrencePattern',
          RecurrencePatternEnum,
          true
        ),
        /**
         * Static representation of the {@link endType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TYPE: fieldBuilder.buildEnumField('EndType', EndTypeEnum, true),
        /**
         * Static representation of the {@link seriesStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES_START_DATE: fieldBuilder.buildEdmTypeField(
          'SeriesStartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link seriesEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES_END_DATE: fieldBuilder.buildEdmTypeField(
          'SeriesEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link maxOccurrence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_OCCURRENCE: fieldBuilder.buildEdmTypeField(
          'MaxOccurrence',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEdmTypeField('Interval', 'Edm.Int32', true),
        /**
         * Static representation of the {@link sunday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY: fieldBuilder.buildEnumField('Sunday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link monday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY: fieldBuilder.buildEnumField('Monday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link tuesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY: fieldBuilder.buildEnumField('Tuesday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link wednesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY: fieldBuilder.buildEnumField('Wednesday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link thursday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY: fieldBuilder.buildEnumField('Thursday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link friday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY: fieldBuilder.buildEnumField('Friday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link saturday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY: fieldBuilder.buildEnumField('Saturday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link repeatOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPEAT_OPTION: fieldBuilder.buildEnumField(
          'RepeatOption',
          RepeatOptionEnum,
          true
        ),
        /**
         * Static representation of the {@link belongedSeriesNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BELONGED_SERIES_NUM: fieldBuilder.buildEdmTypeField(
          'BelongedSeriesNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link isRemoved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REMOVED: fieldBuilder.buildEnumField('IsRemoved', BoYesNoEnum, true),
        /**
         * Static representation of the {@link addressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'AddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TYPE: fieldBuilder.buildEnumField(
          'AddressType',
          BoAddressType,
          true
        ),
        /**
         * Static representation of the {@link handledByEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLED_BY_EMPLOYEE: fieldBuilder.buildEdmTypeField(
          'HandledByEmployee',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link recurrenceSequenceSpecifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_SEQUENCE_SPECIFIER: fieldBuilder.buildEnumField(
          'RecurrenceSequenceSpecifier',
          RecurrenceSequenceEnum,
          true
        ),
        /**
         * Static representation of the {@link recurrenceDayInMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_DAY_IN_MONTH: fieldBuilder.buildEdmTypeField(
          'RecurrenceDayInMonth',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link recurrenceMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_MONTH: fieldBuilder.buildEdmTypeField(
          'RecurrenceMonth',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link recurrenceDayOfWeek} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_DAY_OF_WEEK: fieldBuilder.buildEnumField(
          'RecurrenceDayOfWeek',
          RecurrenceDayOfWeekEnum,
          true
        ),
        /**
         * Static representation of the {@link salesOpportunityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OPPORTUNITY_ID: fieldBuilder.buildEdmTypeField(
          'SalesOpportunityId',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesOpportunityLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OPPORTUNITY_LINE: fieldBuilder.buildEdmTypeField(
          'SalesOpportunityLine',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link handledByRecipientList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLED_BY_RECIPIENT_LIST: fieldBuilder.buildEdmTypeField(
          'HandledByRecipientList',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link office365EventId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICE_365_EVENT_ID: fieldBuilder.buildEdmTypeField(
          'Office365EventId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VERSION: fieldBuilder.buildEdmTypeField(
          'DataVersion',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link checkInListParams} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_IN_LIST_PARAMS: fieldBuilder.buildCollectionField(
          'CheckInListParams',
          CheckInParams,
          true
        ),
        /**
         * Static representation of the {@link activityMultipleRecipients} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_MULTIPLE_RECIPIENTS: fieldBuilder.buildCollectionField(
          'ActivityMultipleRecipients',
          ActivityMultipleRecipient,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Activities)
      };
    }

    return this._schema;
  }
}
