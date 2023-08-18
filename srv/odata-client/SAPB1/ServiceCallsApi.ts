/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCalls } from './ServiceCalls';
import { ServiceCallsRequestBuilder } from './ServiceCallsRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { ServiceContractsApi } from './ServiceContractsApi';
import { ServiceCallOriginsApi } from './ServiceCallOriginsApi';
import { ItemsApi } from './ItemsApi';
import { ItemGroupsApi } from './ItemGroupsApi';
import { ServiceCallStatusApi } from './ServiceCallStatusApi';
import { ServiceCallTypesApi } from './ServiceCallTypesApi';
import { ServiceCallProblemTypesApi } from './ServiceCallProblemTypesApi';
import { UsersApi } from './UsersApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { QueueApi } from './QueueApi';
import { ActivityLocationsApi } from './ActivityLocationsApi';
import { CountriesApi } from './CountriesApi';
import { ServiceCallProblemSubTypesApi } from './ServiceCallProblemSubTypesApi';
import { ProjectsApi } from './ProjectsApi';
import { ServiceCallActivity } from './ServiceCallActivity';
import { ServiceCallInventoryExpense } from './ServiceCallInventoryExpense';
import { ServiceCallSolution } from './ServiceCallSolution';
import { ServiceCallScheduling } from './ServiceCallScheduling';
import { ServiceCallBpAddressComponent } from './ServiceCallBpAddressComponent';
import { BoSvcCallPriorities } from './BoSvcCallPriorities';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoDurations } from './BoDurations';
import { BoAddressType } from './BoAddressType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ServiceCallsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ServiceCalls<DeSerializersT>, DeSerializersT>
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
  ): ServiceCallsApi<DeSerializersT> {
    return new ServiceCallsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceContract} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACT: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_ORIGIN: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallOriginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_STATUS: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallStatusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_TYPE: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallProblemType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_PROBLEM_TYPE: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallProblemTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link queue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUEUE_2: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      QueueApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_LOCATION: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ActivityLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallProblemSubType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_PROBLEM_SUB_TYPE: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallProblemSubTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnersApi<DeSerializersT>,
      ServiceContractsApi<DeSerializersT>,
      ServiceCallOriginsApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      ItemGroupsApi<DeSerializersT>,
      ServiceCallStatusApi<DeSerializersT>,
      ServiceCallTypesApi<DeSerializersT>,
      ServiceCallProblemTypesApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      QueueApi<DeSerializersT>,
      ActivityLocationsApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      ServiceCallProblemSubTypesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[0]
      ),
      SERVICE_CONTRACT: new OneToOneLink(
        'ServiceContract',
        this,
        linkedApis[1]
      ),
      SERVICE_CALL_ORIGIN: new OneToOneLink(
        'ServiceCallOrigin',
        this,
        linkedApis[2]
      ),
      ITEM: new OneToOneLink('Item', this, linkedApis[3]),
      ITEM_GROUPS: new OneToOneLink('ItemGroups', this, linkedApis[4]),
      SERVICE_CALL_STATUS: new OneToOneLink(
        'ServiceCallStatus',
        this,
        linkedApis[5]
      ),
      SERVICE_CALL_TYPE: new OneToOneLink(
        'ServiceCallType',
        this,
        linkedApis[6]
      ),
      SERVICE_CALL_PROBLEM_TYPE: new OneToOneLink(
        'ServiceCallProblemType',
        this,
        linkedApis[7]
      ),
      USER: new OneToOneLink('User', this, linkedApis[8]),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[9]),
      QUEUE_2: new OneToOneLink('Queue2', this, linkedApis[10]),
      ACTIVITY_LOCATION: new OneToOneLink(
        'ActivityLocation',
        this,
        linkedApis[11]
      ),
      COUNTRY_2: new OneToOneLink('Country2', this, linkedApis[12]),
      SERVICE_CALL_PROBLEM_SUB_TYPE: new OneToOneLink(
        'ServiceCallProblemSubType',
        this,
        linkedApis[13]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[14])
    };
    return this;
  }

  entityConstructor = ServiceCalls;

  requestBuilder(): ServiceCallsRequestBuilder<DeSerializersT> {
    return new ServiceCallsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceCalls<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ServiceCalls<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ServiceCalls<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ServiceCalls, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ServiceCalls, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_CALL_ID: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUBJECT: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MANUFACTURER_SERIAL_NUM: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_SERIAL_NUM: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_ID: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CONTRACT_END_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RESOLUTION_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RESOLUTION_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ITEM_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_DESCRIPTION: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_GROUP_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRIORITY: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      BoSvcCallPriorities,
      true,
      true
    >;
    CALL_TYPE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PROBLEM_TYPE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ASSIGNEE_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICIAN_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RESOLUTION: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    RESPONDER: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    UPDATED_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    BELONGS_TO_A_QUEUE: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RESPONSE_BY_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    RESPONSE_BY_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RESOLUTION_ON_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RESPONSE_ON_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    RESPONSE_ON_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CLOSING_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    ASSIGNED_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    QUEUE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSE_ASSIGNEE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ENTITLEDFOR_SERVICE: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RESOLUTION_ON_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    ASSIGNED_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    CLOSING_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HAND_WRITTEN: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PERIOD_INDICATOR: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    END_DUE_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DURATION: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DURATION_TYPE: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      BoDurations,
      true,
      true
    >;
    REMINDER: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REMINDER_PERIOD: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    REMINDER_TYPE: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      BoDurations,
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ADDRESS_NAME: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TYPE: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      BoAddressType,
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOM: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_IN_CALENDAR: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CUSTOMER_REF_NO: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROBLEM_SUB_TYPE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERVICE_BP_TYPE: EnumField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      ServiceTypeEnum,
      true,
      true
    >;
    BP_CONTACT_PERSON: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_PHONE_1: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_PHONE_2: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_CELLULAR: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_FAX: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    B_PE_MAIL: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_PROJECT_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_TERRITORY: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BP_SHIP_TO_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_SHIP_TO_ADDRESS: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_BILL_TO_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_BILL_TO_ADDRESS: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SUPPLEMENTARY_CODE: OrderableEdmTypeField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CALL_ACTIVITIES: CollectionField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      ServiceCallActivity,
      true,
      true
    >;
    SERVICE_CALL_INVENTORY_EXPENSES: CollectionField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      ServiceCallInventoryExpense,
      true,
      true
    >;
    SERVICE_CALL_SOLUTIONS: CollectionField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      ServiceCallSolution,
      true,
      true
    >;
    SERVICE_CALL_SCHEDULINGS: CollectionField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      ServiceCallScheduling,
      true,
      true
    >;
    SERVICE_CALL_BP_ADDRESS_COMPONENTS: CollectionField<
      ServiceCalls<DeSerializers>,
      DeSerializersT,
      ServiceCallBpAddressComponent,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceContract} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACT: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_ORIGIN: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallOriginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_STATUS: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallStatusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_TYPE: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallProblemType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_PROBLEM_TYPE: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallProblemTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link queue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUEUE_2: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      QueueApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link activityLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_LOCATION: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ActivityLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallProblemSubType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_PROBLEM_SUB_TYPE: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ServiceCallProblemSubTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ServiceCalls<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ServiceCalls<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link serviceCallId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CALL_ID: fieldBuilder.buildEdmTypeField(
          'ServiceCallID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link subject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT: fieldBuilder.buildEdmTypeField('Subject', 'Edm.String', true),
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
         * Static representation of the {@link manufacturerSerialNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_SERIAL_NUM: fieldBuilder.buildEdmTypeField(
          'ManufacturerSerialNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internalSerialNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_SERIAL_NUM: fieldBuilder.buildEdmTypeField(
          'InternalSerialNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ContractID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link contractEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_END_DATE: fieldBuilder.buildEdmTypeField(
          'ContractEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link resolutionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_DATE: fieldBuilder.buildEdmTypeField(
          'ResolutionDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link resolutionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_TIME: fieldBuilder.buildEdmTypeField(
          'ResolutionTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('Origin', 'Edm.Int32', true),
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ItemDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ItemGroupCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.Int32', true),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEnumField(
          'Priority',
          BoSvcCallPriorities,
          true
        ),
        /**
         * Static representation of the {@link callType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALL_TYPE: fieldBuilder.buildEdmTypeField(
          'CallType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link problemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROBLEM_TYPE: fieldBuilder.buildEdmTypeField(
          'ProblemType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link assigneeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNEE_CODE: fieldBuilder.buildEdmTypeField(
          'AssigneeCode',
          'Edm.Int32',
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
         * Static representation of the {@link technicianCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICIAN_CODE: fieldBuilder.buildEdmTypeField(
          'TechnicianCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link resolution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION: fieldBuilder.buildEdmTypeField(
          'Resolution',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link creationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TIME: fieldBuilder.buildEdmTypeField(
          'CreationTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link responder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONDER: fieldBuilder.buildEdmTypeField(
          'Responder',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link updatedTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATED_TIME: fieldBuilder.buildEdmTypeField(
          'UpdatedTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link belongsToAQueue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BELONGS_TO_A_QUEUE: fieldBuilder.buildEnumField(
          'BelongsToAQueue',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link responseByTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_BY_TIME: fieldBuilder.buildEdmTypeField(
          'ResponseByTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link responseByDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_BY_DATE: fieldBuilder.buildEdmTypeField(
          'ResponseByDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link resolutionOnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_ON_DATE: fieldBuilder.buildEdmTypeField(
          'ResolutionOnDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link responseOnTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_ON_TIME: fieldBuilder.buildEdmTypeField(
          'ResponseOnTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link responseOnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_ON_DATE: fieldBuilder.buildEdmTypeField(
          'ResponseOnDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link closingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_TIME: fieldBuilder.buildEdmTypeField(
          'ClosingTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link assignedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_DATE: fieldBuilder.buildEdmTypeField(
          'AssignedDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link queue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE: fieldBuilder.buildEdmTypeField('Queue', 'Edm.String', true),
        /**
         * Static representation of the {@link responseAssignee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_ASSIGNEE: fieldBuilder.buildEdmTypeField(
          'ResponseAssignee',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link entitledforService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITLEDFOR_SERVICE: fieldBuilder.buildEnumField(
          'EntitledforService',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link resolutionOnTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_ON_TIME: fieldBuilder.buildEdmTypeField(
          'ResolutionOnTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link assignedTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_TIME: fieldBuilder.buildEdmTypeField(
          'AssignedTime',
          'Edm.TimeOfDay',
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
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
        /**
         * Static representation of the {@link handWritten} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAND_WRITTEN: fieldBuilder.buildEnumField(
          'HandWritten',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link periodIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_INDICATOR: fieldBuilder.buildEdmTypeField(
          'PeriodIndicator',
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
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.TimeOfDay',
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
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField('Location', 'Edm.Int32', true),
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
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link room} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM: fieldBuilder.buildEdmTypeField('Room', 'Edm.String', true),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link displayInCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_IN_CALENDAR: fieldBuilder.buildEnumField(
          'DisplayInCalendar',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link customerRefNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REF_NO: fieldBuilder.buildEdmTypeField(
          'CustomerRefNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link problemSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROBLEM_SUB_TYPE: fieldBuilder.buildEdmTypeField(
          'ProblemSubType',
          'Edm.Int32',
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
         * Static representation of the {@link bpContactPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CONTACT_PERSON: fieldBuilder.buildEdmTypeField(
          'BPContactPerson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpPhone1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_PHONE_1: fieldBuilder.buildEdmTypeField(
          'BPPhone1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpPhone2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_PHONE_2: fieldBuilder.buildEdmTypeField(
          'BPPhone2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpCellular} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CELLULAR: fieldBuilder.buildEdmTypeField(
          'BPCellular',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_FAX: fieldBuilder.buildEdmTypeField('BPFax', 'Edm.String', true),
        /**
         * Static representation of the {@link bPeMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        B_PE_MAIL: fieldBuilder.buildEdmTypeField(
          'BPeMail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpProjectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_PROJECT_CODE: fieldBuilder.buildEdmTypeField(
          'BPProjectCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpTerritory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_TERRITORY: fieldBuilder.buildEdmTypeField(
          'BPTerritory',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bpShipToCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_SHIP_TO_CODE: fieldBuilder.buildEdmTypeField(
          'BPShipToCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpShipToAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_SHIP_TO_ADDRESS: fieldBuilder.buildEdmTypeField(
          'BPShipToAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpBillToCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_BILL_TO_CODE: fieldBuilder.buildEdmTypeField(
          'BPBillToCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpBillToAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_BILL_TO_ADDRESS: fieldBuilder.buildEdmTypeField(
          'BPBillToAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
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
         * Static representation of the {@link supplementaryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLEMENTARY_CODE: fieldBuilder.buildEdmTypeField(
          'SupplementaryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceCallActivities} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CALL_ACTIVITIES: fieldBuilder.buildCollectionField(
          'ServiceCallActivities',
          ServiceCallActivity,
          true
        ),
        /**
         * Static representation of the {@link serviceCallInventoryExpenses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CALL_INVENTORY_EXPENSES: fieldBuilder.buildCollectionField(
          'ServiceCallInventoryExpenses',
          ServiceCallInventoryExpense,
          true
        ),
        /**
         * Static representation of the {@link serviceCallSolutions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CALL_SOLUTIONS: fieldBuilder.buildCollectionField(
          'ServiceCallSolutions',
          ServiceCallSolution,
          true
        ),
        /**
         * Static representation of the {@link serviceCallSchedulings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CALL_SCHEDULINGS: fieldBuilder.buildCollectionField(
          'ServiceCallSchedulings',
          ServiceCallScheduling,
          true
        ),
        /**
         * Static representation of the {@link serviceCallBpAddressComponents} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CALL_BP_ADDRESS_COMPONENTS: fieldBuilder.buildCollectionField(
          'ServiceCallBPAddressComponents',
          ServiceCallBpAddressComponent,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceCalls)
      };
    }

    return this._schema;
  }
}
