/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceContractsRequestBuilder } from './ServiceContractsRequestBuilder';
import { Moment } from 'moment';
import { ServiceContractLine } from './ServiceContractLine';
import { BoSvcContractStatus } from './BoSvcContractStatus';
import { BoContractTypes } from './BoContractTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoServiceTypes } from './BoServiceTypes';
import { BoResponseUnit } from './BoResponseUnit';
import { ServiceTypeEnum } from './ServiceTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ServiceContracts" of service "SAPB1".
 */
export class ServiceContracts extends EntityV4 implements ServiceContractsType {
  /**
   * Technical entity name for ServiceContracts.
   */
  static _entityName = 'ServiceContracts';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Status.
   * @nullable
   */
  status?: BoSvcContractStatus;
  /**
   * Contract Template.
   * @nullable
   */
  contractTemplate?: string;
  /**
   * Contract Type.
   * @nullable
   */
  contractType?: BoContractTypes;
  /**
   * Renewal.
   * @nullable
   */
  renewal?: BoYesNoEnum;
  /**
   * Reminder Time.
   * @nullable
   */
  reminderTime?: number;
  /**
   * Remind Unit.
   * @nullable
   */
  remindUnit?: BoRemindUnits;
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
   * Resolution Unit.
   * @nullable
   */
  resolutionUnit?: BoResolutionUnits;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Monday Enabled.
   * @nullable
   */
  mondayEnabled?: BoYesNoEnum;
  /**
   * Tuesday Enabled.
   * @nullable
   */
  tuesdayEnabled?: BoYesNoEnum;
  /**
   * Wednesday Enabled.
   * @nullable
   */
  wednesdayEnabled?: BoYesNoEnum;
  /**
   * Thursday Enabled.
   * @nullable
   */
  thursdayEnabled?: BoYesNoEnum;
  /**
   * Friday Enabled.
   * @nullable
   */
  fridayEnabled?: BoYesNoEnum;
  /**
   * Saturday Enabled.
   * @nullable
   */
  saturdayEnabled?: BoYesNoEnum;
  /**
   * Sunday Enabled.
   * @nullable
   */
  sundayEnabled?: BoYesNoEnum;
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
   * Include Parts.
   * @nullable
   */
  includeParts?: BoYesNoEnum;
  /**
   * Include Labor.
   * @nullable
   */
  includeLabor?: BoYesNoEnum;
  /**
   * Include Travel.
   * @nullable
   */
  includeTravel?: BoYesNoEnum;
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
   * Include Holidays.
   * @nullable
   */
  includeHolidays?: BoYesNoEnum;
  /**
   * Service Type.
   * @nullable
   */
  serviceType?: BoServiceTypes;
  /**
   * Response Unit.
   * @nullable
   */
  responseUnit?: BoResponseUnit;
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
   * Service Bp Type.
   * @nullable
   */
  serviceBpType?: ServiceTypeEnum;
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
   * Returns an entity builder to construct instances of `ServiceContracts`.
   * @returns A builder that constructs instances of entity type `ServiceContracts`.
   */
  static builder(): EntityBuilderType<ServiceContracts, ServiceContractsType> {
    return EntityV4.entityBuilder(ServiceContracts);
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
  static customField(fieldName: string): CustomFieldV4<ServiceContracts> {
    return EntityV4.customFieldSelector(fieldName, ServiceContracts);
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
  contractId?: number | null;
  customerCode?: string | null;
  customerName?: string | null;
  contactCode?: number | null;
  owner?: number | null;
  status?: BoSvcContractStatus | null;
  contractTemplate?: string | null;
  contractType?: BoContractTypes | null;
  renewal?: BoYesNoEnum | null;
  reminderTime?: number | null;
  remindUnit?: BoRemindUnits | null;
  durationOfCoverage?: number | null;
  startDate?: Moment | null;
  endDate?: Moment | null;
  resolutionTime?: number | null;
  resolutionUnit?: BoResolutionUnits | null;
  description?: string | null;
  mondayEnabled?: BoYesNoEnum | null;
  tuesdayEnabled?: BoYesNoEnum | null;
  wednesdayEnabled?: BoYesNoEnum | null;
  thursdayEnabled?: BoYesNoEnum | null;
  fridayEnabled?: BoYesNoEnum | null;
  saturdayEnabled?: BoYesNoEnum | null;
  sundayEnabled?: BoYesNoEnum | null;
  mondayStart?: Time | null;
  mondayEnd?: Time | null;
  tuesdayStart?: Time | null;
  tuesdayEnd?: Time | null;
  wednesdayStart?: Time | null;
  wednesdayEnd?: Time | null;
  thursdayStart?: Time | null;
  thursdayEnd?: Time | null;
  fridayStart?: Time | null;
  fridayEnd?: Time | null;
  saturdayStart?: Time | null;
  saturdayEnd?: Time | null;
  sundayStart?: Time | null;
  sundayEnd?: Time | null;
  includeParts?: BoYesNoEnum | null;
  includeLabor?: BoYesNoEnum | null;
  includeTravel?: BoYesNoEnum | null;
  templateRemarks?: string | null;
  remarks?: string | null;
  includeHolidays?: BoYesNoEnum | null;
  serviceType?: BoServiceTypes | null;
  responseUnit?: BoResponseUnit | null;
  responseTime?: number | null;
  terminationDate?: Moment | null;
  attachmentEntry?: number | null;
  serviceBpType?: ServiceTypeEnum | null;
  serviceContractLines?: ServiceContractLine[] | null;
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
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: EnumField<ServiceContracts> = new EnumField('Status', ServiceContracts);
  /**
   * Static representation of the [[contractTemplate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_TEMPLATE: StringField<ServiceContracts> = new StringField('ContractTemplate', ServiceContracts, 'Edm.String');
  /**
   * Static representation of the [[contractType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_TYPE: EnumField<ServiceContracts> = new EnumField('ContractType', ServiceContracts);
  /**
   * Static representation of the [[renewal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RENEWAL: EnumField<ServiceContracts> = new EnumField('Renewal', ServiceContracts);
  /**
   * Static representation of the [[reminderTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMINDER_TIME: NumberField<ServiceContracts> = new NumberField('ReminderTime', ServiceContracts, 'Edm.Int32');
  /**
   * Static representation of the [[remindUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMIND_UNIT: EnumField<ServiceContracts> = new EnumField('RemindUnit', ServiceContracts);
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
   * Static representation of the [[resolutionUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLUTION_UNIT: EnumField<ServiceContracts> = new EnumField('ResolutionUnit', ServiceContracts);
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceContracts> = new StringField('Description', ServiceContracts, 'Edm.String');
  /**
   * Static representation of the [[mondayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_ENABLED: EnumField<ServiceContracts> = new EnumField('MondayEnabled', ServiceContracts);
  /**
   * Static representation of the [[tuesdayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_ENABLED: EnumField<ServiceContracts> = new EnumField('TuesdayEnabled', ServiceContracts);
  /**
   * Static representation of the [[wednesdayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_ENABLED: EnumField<ServiceContracts> = new EnumField('WednesdayEnabled', ServiceContracts);
  /**
   * Static representation of the [[thursdayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_ENABLED: EnumField<ServiceContracts> = new EnumField('ThursdayEnabled', ServiceContracts);
  /**
   * Static representation of the [[fridayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_ENABLED: EnumField<ServiceContracts> = new EnumField('FridayEnabled', ServiceContracts);
  /**
   * Static representation of the [[saturdayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_ENABLED: EnumField<ServiceContracts> = new EnumField('SaturdayEnabled', ServiceContracts);
  /**
   * Static representation of the [[sundayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_ENABLED: EnumField<ServiceContracts> = new EnumField('SundayEnabled', ServiceContracts);
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
   * Static representation of the [[includeParts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_PARTS: EnumField<ServiceContracts> = new EnumField('IncludeParts', ServiceContracts);
  /**
   * Static representation of the [[includeLabor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_LABOR: EnumField<ServiceContracts> = new EnumField('IncludeLabor', ServiceContracts);
  /**
   * Static representation of the [[includeTravel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_TRAVEL: EnumField<ServiceContracts> = new EnumField('IncludeTravel', ServiceContracts);
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
   * Static representation of the [[includeHolidays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_HOLIDAYS: EnumField<ServiceContracts> = new EnumField('IncludeHolidays', ServiceContracts);
  /**
   * Static representation of the [[serviceType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_TYPE: EnumField<ServiceContracts> = new EnumField('ServiceType', ServiceContracts);
  /**
   * Static representation of the [[responseUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_UNIT: EnumField<ServiceContracts> = new EnumField('ResponseUnit', ServiceContracts);
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
   * Static representation of the [[serviceBpType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_BP_TYPE: EnumField<ServiceContracts> = new EnumField('ServiceBPType', ServiceContracts);
  /**
   * Static representation of the [[serviceContractLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CONTRACT_LINES: CollectionField<ServiceContracts, ServiceContractLine> = new CollectionField('ServiceContract_Lines', ServiceContracts, ServiceContractLine);
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
  export const _allFields: Array<NumberField<ServiceContracts> | StringField<ServiceContracts> | EnumField<ServiceContracts> | DateField<ServiceContracts> | TimeField<ServiceContracts> | CollectionField<ServiceContracts, ServiceContractLine> | OneToOneLink<ServiceContracts, BusinessPartners> | OneToOneLink<ServiceContracts, Users> | OneToOneLink<ServiceContracts, ContractTemplates> | OneToOneLink<ServiceContracts, Attachments2> | OneToManyLink<ServiceContracts, ServiceCalls>> = [
    ServiceContracts.CONTRACT_ID,
    ServiceContracts.CUSTOMER_CODE,
    ServiceContracts.CUSTOMER_NAME,
    ServiceContracts.CONTACT_CODE,
    ServiceContracts.OWNER,
    ServiceContracts.STATUS,
    ServiceContracts.CONTRACT_TEMPLATE,
    ServiceContracts.CONTRACT_TYPE,
    ServiceContracts.RENEWAL,
    ServiceContracts.REMINDER_TIME,
    ServiceContracts.REMIND_UNIT,
    ServiceContracts.DURATION_OF_COVERAGE,
    ServiceContracts.START_DATE,
    ServiceContracts.END_DATE,
    ServiceContracts.RESOLUTION_TIME,
    ServiceContracts.RESOLUTION_UNIT,
    ServiceContracts.DESCRIPTION,
    ServiceContracts.MONDAY_ENABLED,
    ServiceContracts.TUESDAY_ENABLED,
    ServiceContracts.WEDNESDAY_ENABLED,
    ServiceContracts.THURSDAY_ENABLED,
    ServiceContracts.FRIDAY_ENABLED,
    ServiceContracts.SATURDAY_ENABLED,
    ServiceContracts.SUNDAY_ENABLED,
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
    ServiceContracts.INCLUDE_PARTS,
    ServiceContracts.INCLUDE_LABOR,
    ServiceContracts.INCLUDE_TRAVEL,
    ServiceContracts.TEMPLATE_REMARKS,
    ServiceContracts.REMARKS,
    ServiceContracts.INCLUDE_HOLIDAYS,
    ServiceContracts.SERVICE_TYPE,
    ServiceContracts.RESPONSE_UNIT,
    ServiceContracts.RESPONSE_TIME,
    ServiceContracts.TERMINATION_DATE,
    ServiceContracts.ATTACHMENT_ENTRY,
    ServiceContracts.SERVICE_BP_TYPE,
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
