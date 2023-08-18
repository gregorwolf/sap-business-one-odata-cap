/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Contacts } from './Contacts';
import { ContactsRequestBuilder } from './ContactsRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { ActivitySubjectsApi } from './ActivitySubjectsApi';
import { ActivityTypesApi } from './ActivityTypesApi';
import { ActivityLocationsApi } from './ActivityLocationsApi';
import { SalesPersonsApi } from './SalesPersonsApi';
import { UsersApi } from './UsersApi';
import { CountriesApi } from './CountriesApi';
import { ActivityStatusesApi } from './ActivityStatusesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoMsgPriorities } from './BoMsgPriorities';
import { BoActivities } from './BoActivities';
import { BoDurations } from './BoDurations';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ContactsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Contacts<DeSerializersT>, DeSerializersT>
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
  ): ContactsApi<DeSerializersT> {
    return new ContactsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activitySubject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_SUBJECT: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      ActivitySubjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityType2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_TYPE_2: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      ActivityTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_LOCATION: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      ActivityLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_STATUS: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      ActivityStatusesApi<DeSerializersT>
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
      ActivityStatusesApi<DeSerializersT>
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
      ACTIVITY_STATUS: new OneToOneLink('ActivityStatus', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = Contacts;

  requestBuilder(): ContactsRequestBuilder<DeSerializersT> {
    return new ContactsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Contacts<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Contacts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Contacts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Contacts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Contacts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CARD_CODE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_DATE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CONTACT_TIME: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    RECONTACT: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CLOSED: EnumField<
      Contacts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CLOSE_DATE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBJECT: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_TYPE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_ENTRY: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_CODE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIORITY: EnumField<
      Contacts<DeSerializers>,
      DeSerializersT,
      BoMsgPriorities,
      true,
      true
    >;
    DETAILS: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY: EnumField<
      Contacts<DeSerializers>,
      DeSerializersT,
      BoActivities,
      true,
      true
    >;
    ACTIVITY_TYPE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DURATION: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DURATION_TYPE: EnumField<
      Contacts<DeSerializers>,
      DeSerializersT,
      BoDurations,
      true,
      true
    >;
    SALES_EMPLOYEE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CONTACT_PERSON_CODE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HANDLED_BY: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REMINDER: EnumField<
      Contacts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REMINDER_PERIOD: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    REMINDER_TYPE: EnumField<
      Contacts<DeSerializers>,
      DeSerializersT,
      BoDurations,
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONALFLAG: EnumField<
      Contacts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENTOBJECT_ID: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PARENTOBJECTTYPE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOM: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INACTIVEFLAG: EnumField<
      Contacts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREVIOUS_ACTIVITY: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TENTATIVEFLAG: EnumField<
      Contacts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    END_DUEDATE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOC_TYPE_EX: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Contacts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activitySubject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_SUBJECT: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      ActivitySubjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityType2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_TYPE_2: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      ActivityTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_LOCATION: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      ActivityLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_STATUS: OneToOneLink<
      Contacts<DeSerializersT>,
      DeSerializersT,
      ActivityStatusesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Contacts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link contactDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_DATE: fieldBuilder.buildEdmTypeField(
          'ContactDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link contactTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_TIME: fieldBuilder.buildEdmTypeField(
          'ContactTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link recontact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONTACT: fieldBuilder.buildEdmTypeField(
          'Recontact',
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
         * Static representation of the {@link contactCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_CODE: fieldBuilder.buildEdmTypeField(
          'ContactCode',
          'Edm.Int32',
          false
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
         * Static representation of the {@link activity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY: fieldBuilder.buildEnumField('Activity', BoActivities, true),
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
         * Static representation of the {@link personalflag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONALFLAG: fieldBuilder.buildEnumField(
          'Personalflag',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link parentobjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENTOBJECT_ID: fieldBuilder.buildEdmTypeField(
          'ParentobjectId',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link parentobjecttype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENTOBJECTTYPE: fieldBuilder.buildEdmTypeField(
          'Parentobjecttype',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link room} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM: fieldBuilder.buildEdmTypeField('Room', 'Edm.String', true),
        /**
         * Static representation of the {@link inactiveflag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVEFLAG: fieldBuilder.buildEnumField(
          'Inactiveflag',
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
         * Static representation of the {@link tentativeflag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENTATIVEFLAG: fieldBuilder.buildEnumField(
          'Tentativeflag',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link endDuedate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DUEDATE: fieldBuilder.buildEdmTypeField(
          'EndDuedate',
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
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Contacts)
      };
    }

    return this._schema;
  }
}
