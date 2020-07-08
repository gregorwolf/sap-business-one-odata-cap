/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceContractsRequestBuilder } from './ServiceContractsRequestBuilder';
import { Moment } from 'moment';
import { ServiceContractLine, ServiceContractLineField } from './ServiceContractLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ServiceContracts" of service "SAPB1".
 */
export class ServiceContracts extends Entity implements ServiceContractsType {
  /**
   * Technical entity name for ServiceContracts.
   */
  static _entityName = 'ServiceContracts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ServiceContracts.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Contract Id.
   * @nullable
   */
  contractId?: number;
  /**
   * Customer Code.
   * @nullable
   */
  customerCode?: string;
  /**
   * Customer Name.
   * @nullable
   */
  customerName?: string;
  /**
   * Contact Code.
   * @nullable
   */
  contactCode?: number;
  /**
   * Owner.
   * @nullable
   */
  owner?: number;
  /**
   * Contract Template.
   * @nullable
   */
  contractTemplate?: string;
  /**
   * Reminder Time.
   * @nullable
   */
  reminderTime?: number;
  /**
   * Duration Of Coverage.
   * @nullable
   */
  durationOfCoverage?: number;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Resolution Time.
   * @nullable
   */
  resolutionTime?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Monday Start.
   * @nullable
   */
  mondayStart?: Time;
  /**
   * Monday End.
   * @nullable
   */
  mondayEnd?: Time;
  /**
   * Tuesday Start.
   * @nullable
   */
  tuesdayStart?: Time;
  /**
   * Tuesday End.
   * @nullable
   */
  tuesdayEnd?: Time;
  /**
   * Wednesday Start.
   * @nullable
   */
  wednesdayStart?: Time;
  /**
   * Wednesday End.
   * @nullable
   */
  wednesdayEnd?: Time;
  /**
   * Thursday Start.
   * @nullable
   */
  thursdayStart?: Time;
  /**
   * Thursday End.
   * @nullable
   */
  thursdayEnd?: Time;
  /**
   * Friday Start.
   * @nullable
   */
  fridayStart?: Time;
  /**
   * Friday End.
   * @nullable
   */
  fridayEnd?: Time;
  /**
   * Saturday Start.
   * @nullable
   */
  saturdayStart?: Time;
  /**
   * Saturday End.
   * @nullable
   */
  saturdayEnd?: Time;
  /**
   * Sunday Start.
   * @nullable
   */
  sundayStart?: Time;
  /**
   * Sunday End.
   * @nullable
   */
  sundayEnd?: Time;
  /**
   * Template Remarks.
   * @nullable
   */
  templateRemarks?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Response Time.
   * @nullable
   */
  responseTime?: number;
  /**
   * Termination Date.
   * @nullable
   */
  terminationDate?: Moment;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * Service Contract Lines.
   * @nullable
   */
  serviceContractLines?: ServiceContractLine[];
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[ContractTemplates]] entity.
   */
  contractTemplate2!: ContractTemplates;
  /**
   * One-to-one navigation property to the [[Attachments2]] entity.
   */
  attachments2!: Attachments2;
  /**
   * One-to-many navigation property to the [[ServiceCalls]] entity.
   */
  serviceCalls!: ServiceCalls[];

  /**
   * Returns an entity builder to construct instances `ServiceContracts`.
   * @returns A builder that constructs instances of entity type `ServiceContracts`.
   */
  static builder(): EntityBuilderType<ServiceContracts, ServiceContractsTypeForceMandatory> {
    return Entity.entityBuilder(ServiceContracts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ServiceContracts` entity type.
   * @returns A `ServiceContracts` request builder.
   */
  static requestBuilder(): ServiceContractsRequestBuilder {
    return new ServiceContractsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceContracts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ServiceContracts`.
   */
  static customField(fieldName: string): CustomField<ServiceContracts> {
    return Entity.customFieldSelector(fieldName, ServiceContracts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Users, UsersType } from './Users';
import { ContractTemplates, ContractTemplatesType } from './ContractTemplates';
import { Attachments2, Attachments2Type } from './Attachments2';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';

export interface ServiceContractsType {
  contractId?: number;
  customerCode?: string;
  customerName?: string;
  contactCode?: number;
  owner?: number;
  contractTemplate?: string;
  reminderTime?: number;
  durationOfCoverage?: number;
  startDate?: Moment;
  endDate?: Moment;
  resolutionTime?: number;
  description?: string;
  mondayStart?: Time;
  mondayEnd?: Time;
  tuesdayStart?: Time;
  tuesdayEnd?: Time;
  wednesdayStart?: Time;
  wednesdayEnd?: Time;
  thursdayStart?: Time;
  thursdayEnd?: Time;
  fridayStart?: Time;
  fridayEnd?: Time;
  saturdayStart?: Time;
  saturdayEnd?: Time;
  sundayStart?: Time;
  sundayEnd?: Time;
  templateRemarks?: string;
  remarks?: string;
  responseTime?: number;
  terminationDate?: Moment;
  attachmentEntry?: number;
  serviceContractLines?: ServiceContractLine[];
  businessPartner: BusinessPartnersType;
  user: UsersType;
  contractTemplate2: ContractTemplatesType;
  attachments2: Attachments2Type;
  serviceCalls: ServiceCallsType[];
}

export interface ServiceContractsTypeForceMandatory {
  contractId: number;
  customerCode: string;
  customerName: string;
  contactCode: number;
  owner: number;
  contractTemplate: string;
  reminderTime: number;
  durationOfCoverage: number;
  startDate: Moment;
  endDate: Moment;
  resolutionTime: number;
  description: string;
  mondayStart: Time;
  mondayEnd: Time;
  tuesdayStart: Time;
  tuesdayEnd: Time;
  wednesdayStart: Time;
  wednesdayEnd: Time;
  thursdayStart: Time;
  thursdayEnd: Time;
  fridayStart: Time;
  fridayEnd: Time;
  saturdayStart: Time;
  saturdayEnd: Time;
  sundayStart: Time;
  sundayEnd: Time;
  templateRemarks: string;
  remarks: string;
  responseTime: number;
  terminationDate: Moment;
  attachmentEntry: number;
  serviceContractLines: ServiceContractLine[];
  businessPartner: BusinessPartnersType;
  user: UsersType;
  contractTemplate2: ContractTemplatesType;
  attachments2: Attachments2Type;
  serviceCalls: ServiceCallsType[];
}

export namespace ServiceContracts {
  /**
   * Static representation of the [[contractId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_ID: NumberField<ServiceContracts> = new NumberField('ContractID', ServiceContracts, 'Edm.Int32');
  /**
   * Static representation of the [[customerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_CODE: StringField<ServiceContracts> = new StringField('CustomerCode', ServiceContracts, 'Edm.String');
  /**
   * Static representation of the [[customerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_NAME: StringField<ServiceContracts> = new StringField('CustomerName', ServiceContracts, 'Edm.String');
  /**
   * Static representation of the [[contactCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_CODE: NumberField<ServiceContracts> = new NumberField('ContactCode', ServiceContracts, 'Edm.Int32');
  /**
   * Static representation of the [[owner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER: NumberField<ServiceContracts> = new NumberField('Owner', ServiceContracts, 'Edm.Int32');
  /**
   * Static representation of the [[contractTemplate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_TEMPLATE: StringField<ServiceContracts> = new StringField('ContractTemplate', ServiceContracts, 'Edm.String');
  /**
   * Static representation of the [[reminderTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMINDER_TIME: NumberField<ServiceContracts> = new NumberField('ReminderTime', ServiceContracts, 'Edm.Int32');
  /**
   * Static representation of the [[durationOfCoverage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DURATION_OF_COVERAGE: NumberField<ServiceContracts> = new NumberField('DurationOfCoverage', ServiceContracts, 'Edm.Int32');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<ServiceContracts> = new DateField('StartDate', ServiceContracts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<ServiceContracts> = new DateField('EndDate', ServiceContracts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[resolutionTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLUTION_TIME: NumberField<ServiceContracts> = new NumberField('ResolutionTime', ServiceContracts, 'Edm.Int32');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceContracts> = new StringField('Description', ServiceContracts, 'Edm.String');
  /**
   * Static representation of the [[mondayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_START: TimeField<ServiceContracts> = new TimeField('MondayStart', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[mondayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_END: TimeField<ServiceContracts> = new TimeField('MondayEnd', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[tuesdayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_START: TimeField<ServiceContracts> = new TimeField('TuesdayStart', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[tuesdayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_END: TimeField<ServiceContracts> = new TimeField('TuesdayEnd', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[wednesdayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_START: TimeField<ServiceContracts> = new TimeField('WednesdayStart', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[wednesdayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_END: TimeField<ServiceContracts> = new TimeField('WednesdayEnd', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[thursdayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_START: TimeField<ServiceContracts> = new TimeField('ThursdayStart', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[thursdayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_END: TimeField<ServiceContracts> = new TimeField('ThursdayEnd', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[fridayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_START: TimeField<ServiceContracts> = new TimeField('FridayStart', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[fridayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_END: TimeField<ServiceContracts> = new TimeField('FridayEnd', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[saturdayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_START: TimeField<ServiceContracts> = new TimeField('SaturdayStart', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[saturdayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_END: TimeField<ServiceContracts> = new TimeField('SaturdayEnd', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[sundayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_START: TimeField<ServiceContracts> = new TimeField('SundayStart', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[sundayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_END: TimeField<ServiceContracts> = new TimeField('SundayEnd', ServiceContracts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[templateRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_REMARKS: StringField<ServiceContracts> = new StringField('TemplateRemarks', ServiceContracts, 'Edm.String');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<ServiceContracts> = new StringField('Remarks', ServiceContracts, 'Edm.String');
  /**
   * Static representation of the [[responseTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_TIME: NumberField<ServiceContracts> = new NumberField('ResponseTime', ServiceContracts, 'Edm.Int32');
  /**
   * Static representation of the [[terminationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERMINATION_DATE: DateField<ServiceContracts> = new DateField('TerminationDate', ServiceContracts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<ServiceContracts> = new NumberField('AttachmentEntry', ServiceContracts, 'Edm.Int32');
  /**
   * Static representation of the [[serviceContractLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CONTRACT_LINES: CollectionField<ServiceContracts> = new CollectionField('ServiceContract_Lines', ServiceContracts, new ServiceContractLineField('', ServiceContracts));
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<ServiceContracts, BusinessPartners> = new OneToOneLink('BusinessPartner', ServiceContracts, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<ServiceContracts, Users> = new OneToOneLink('User', ServiceContracts, Users);
  /**
   * Static representation of the one-to-one navigation property [[contractTemplate2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_TEMPLATE_2: OneToOneLink<ServiceContracts, ContractTemplates> = new OneToOneLink('ContractTemplate2', ServiceContracts, ContractTemplates);
  /**
   * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENTS_2: OneToOneLink<ServiceContracts, Attachments2> = new OneToOneLink('Attachments2', ServiceContracts, Attachments2);
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<ServiceContracts, ServiceCalls> = new OneToManyLink('ServiceCalls', ServiceContracts, ServiceCalls);
  /**
   * All fields of the ServiceContracts entity.
   */
  export const _allFields: Array<NumberField<ServiceContracts> | StringField<ServiceContracts> | DateField<ServiceContracts> | TimeField<ServiceContracts> | CollectionField<ServiceContracts> | OneToOneLink<ServiceContracts, BusinessPartners> | OneToOneLink<ServiceContracts, Users> | OneToOneLink<ServiceContracts, ContractTemplates> | OneToOneLink<ServiceContracts, Attachments2> | OneToManyLink<ServiceContracts, ServiceCalls>> = [
    ServiceContracts.CONTRACT_ID,
    ServiceContracts.CUSTOMER_CODE,
    ServiceContracts.CUSTOMER_NAME,
    ServiceContracts.CONTACT_CODE,
    ServiceContracts.OWNER,
    ServiceContracts.CONTRACT_TEMPLATE,
    ServiceContracts.REMINDER_TIME,
    ServiceContracts.DURATION_OF_COVERAGE,
    ServiceContracts.START_DATE,
    ServiceContracts.END_DATE,
    ServiceContracts.RESOLUTION_TIME,
    ServiceContracts.DESCRIPTION,
    ServiceContracts.MONDAY_START,
    ServiceContracts.MONDAY_END,
    ServiceContracts.TUESDAY_START,
    ServiceContracts.TUESDAY_END,
    ServiceContracts.WEDNESDAY_START,
    ServiceContracts.WEDNESDAY_END,
    ServiceContracts.THURSDAY_START,
    ServiceContracts.THURSDAY_END,
    ServiceContracts.FRIDAY_START,
    ServiceContracts.FRIDAY_END,
    ServiceContracts.SATURDAY_START,
    ServiceContracts.SATURDAY_END,
    ServiceContracts.SUNDAY_START,
    ServiceContracts.SUNDAY_END,
    ServiceContracts.TEMPLATE_REMARKS,
    ServiceContracts.REMARKS,
    ServiceContracts.RESPONSE_TIME,
    ServiceContracts.TERMINATION_DATE,
    ServiceContracts.ATTACHMENT_ENTRY,
    ServiceContracts.SERVICE_CONTRACT_LINES,
    ServiceContracts.BUSINESS_PARTNER,
    ServiceContracts.USER,
    ServiceContracts.CONTRACT_TEMPLATE_2,
    ServiceContracts.ATTACHMENTS_2,
    ServiceContracts.SERVICE_CALLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ServiceContracts> = new AllFields('*', ServiceContracts);
  /**
   * All key fields of the ServiceContracts entity.
   */
  export const _keyFields: Array<Field<ServiceContracts>> = [ServiceContracts.CONTRACT_ID];
  /**
   * Mapping of all key field names to the respective static field property ServiceContracts.
   */
  export const _keys: { [keys: string]: Field<ServiceContracts> } = ServiceContracts._keyFields.reduce((acc: { [keys: string]: Field<ServiceContracts> }, field: Field<ServiceContracts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
