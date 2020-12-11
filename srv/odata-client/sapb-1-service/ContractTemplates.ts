/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContractTemplatesRequestBuilder } from './ContractTemplatesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoContractTypes } from './BoContractTypes';
import { BoResponseUnit } from './BoResponseUnit';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ContractTemplates" of service "SAPB1".
 */
export class ContractTemplates extends EntityV4 implements ContractTemplatesType {
  /**
   * Technical entity name for ContractTemplates.
   */
  static _entityName = 'ContractTemplates';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Template Name.
   * @nullable
   */
  templateName?: string;
  /**
   * Template Is Deleted.
   * @nullable
   */
  templateIsDeleted?: BoYesNoEnum;
  /**
   * Template Is Renewal.
   * @nullable
   */
  templateIsRenewal?: BoYesNoEnum;
  /**
   * Remind Before Renewal.
   * @nullable
   */
  remindBeforeRenewal?: number;
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
   * Response Value.
   * @nullable
   */
  responseValue?: number;
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
   * Contract Type.
   * @nullable
   */
  contractType?: BoContractTypes;
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
   * Response Unit.
   * @nullable
   */
  responseUnit?: BoResponseUnit;
  /**
   * Resolution Time.
   * @nullable
   */
  resolutionTime?: number;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[ServiceContracts]] entity.
   */
  serviceContracts!: ServiceContracts[];

  /**
   * Returns an entity builder to construct instances of `ContractTemplates`.
   * @returns A builder that constructs instances of entity type `ContractTemplates`.
   */
  static builder(): EntityBuilderType<ContractTemplates, ContractTemplatesType> {
    return EntityV4.entityBuilder(ContractTemplates);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ContractTemplates` entity type.
   * @returns A `ContractTemplates` request builder.
   */
  static requestBuilder(): ContractTemplatesRequestBuilder {
    return new ContractTemplatesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContractTemplates`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ContractTemplates`.
   */
  static customField(fieldName: string): CustomFieldV4<ContractTemplates> {
    return EntityV4.customFieldSelector(fieldName, ContractTemplates);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Items, ItemsType } from './Items';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';

export interface ContractTemplatesType {
  templateName?: string | null;
  templateIsDeleted?: BoYesNoEnum | null;
  templateIsRenewal?: BoYesNoEnum | null;
  remindBeforeRenewal?: number | null;
  remindUnit?: BoRemindUnits | null;
  durationOfCoverage?: number | null;
  responseValue?: number | null;
  resolutionUnit?: BoResolutionUnits | null;
  description?: string | null;
  contractType?: BoContractTypes | null;
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
  remarks?: string | null;
  includeHolidays?: BoYesNoEnum | null;
  responseUnit?: BoResponseUnit | null;
  resolutionTime?: number | null;
  attachmentEntry?: number | null;
  items: ItemsType[];
  serviceContracts: ServiceContractsType[];
}

export namespace ContractTemplates {
  /**
   * Static representation of the [[templateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_NAME: StringField<ContractTemplates> = new StringField('TemplateName', ContractTemplates, 'Edm.String');
  /**
   * Static representation of the [[templateIsDeleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_IS_DELETED: EnumField<ContractTemplates> = new EnumField('TemplateIsDeleted', ContractTemplates);
  /**
   * Static representation of the [[templateIsRenewal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_IS_RENEWAL: EnumField<ContractTemplates> = new EnumField('TemplateIsRenewal', ContractTemplates);
  /**
   * Static representation of the [[remindBeforeRenewal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMIND_BEFORE_RENEWAL: NumberField<ContractTemplates> = new NumberField('RemindBeforeRenewal', ContractTemplates, 'Edm.Int32');
  /**
   * Static representation of the [[remindUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMIND_UNIT: EnumField<ContractTemplates> = new EnumField('RemindUnit', ContractTemplates);
  /**
   * Static representation of the [[durationOfCoverage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DURATION_OF_COVERAGE: NumberField<ContractTemplates> = new NumberField('DurationOfCoverage', ContractTemplates, 'Edm.Int32');
  /**
   * Static representation of the [[responseValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_VALUE: NumberField<ContractTemplates> = new NumberField('ResponseValue', ContractTemplates, 'Edm.Int32');
  /**
   * Static representation of the [[resolutionUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLUTION_UNIT: EnumField<ContractTemplates> = new EnumField('ResolutionUnit', ContractTemplates);
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ContractTemplates> = new StringField('Description', ContractTemplates, 'Edm.String');
  /**
   * Static representation of the [[contractType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_TYPE: EnumField<ContractTemplates> = new EnumField('ContractType', ContractTemplates);
  /**
   * Static representation of the [[mondayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_ENABLED: EnumField<ContractTemplates> = new EnumField('MondayEnabled', ContractTemplates);
  /**
   * Static representation of the [[tuesdayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_ENABLED: EnumField<ContractTemplates> = new EnumField('TuesdayEnabled', ContractTemplates);
  /**
   * Static representation of the [[wednesdayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_ENABLED: EnumField<ContractTemplates> = new EnumField('WednesdayEnabled', ContractTemplates);
  /**
   * Static representation of the [[thursdayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_ENABLED: EnumField<ContractTemplates> = new EnumField('ThursdayEnabled', ContractTemplates);
  /**
   * Static representation of the [[fridayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_ENABLED: EnumField<ContractTemplates> = new EnumField('FridayEnabled', ContractTemplates);
  /**
   * Static representation of the [[saturdayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_ENABLED: EnumField<ContractTemplates> = new EnumField('SaturdayEnabled', ContractTemplates);
  /**
   * Static representation of the [[sundayEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_ENABLED: EnumField<ContractTemplates> = new EnumField('SundayEnabled', ContractTemplates);
  /**
   * Static representation of the [[mondayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_START: TimeField<ContractTemplates> = new TimeField('MondayStart', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[mondayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_END: TimeField<ContractTemplates> = new TimeField('MondayEnd', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[tuesdayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_START: TimeField<ContractTemplates> = new TimeField('TuesdayStart', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[tuesdayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_END: TimeField<ContractTemplates> = new TimeField('TuesdayEnd', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[wednesdayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_START: TimeField<ContractTemplates> = new TimeField('WednesdayStart', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[wednesdayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_END: TimeField<ContractTemplates> = new TimeField('WednesdayEnd', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[thursdayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_START: TimeField<ContractTemplates> = new TimeField('ThursdayStart', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[thursdayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_END: TimeField<ContractTemplates> = new TimeField('ThursdayEnd', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[fridayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_START: TimeField<ContractTemplates> = new TimeField('FridayStart', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[fridayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_END: TimeField<ContractTemplates> = new TimeField('FridayEnd', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[saturdayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_START: TimeField<ContractTemplates> = new TimeField('SaturdayStart', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[saturdayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_END: TimeField<ContractTemplates> = new TimeField('SaturdayEnd', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[sundayStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_START: TimeField<ContractTemplates> = new TimeField('SundayStart', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[sundayEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_END: TimeField<ContractTemplates> = new TimeField('SundayEnd', ContractTemplates, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[includeParts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_PARTS: EnumField<ContractTemplates> = new EnumField('IncludeParts', ContractTemplates);
  /**
   * Static representation of the [[includeLabor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_LABOR: EnumField<ContractTemplates> = new EnumField('IncludeLabor', ContractTemplates);
  /**
   * Static representation of the [[includeTravel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_TRAVEL: EnumField<ContractTemplates> = new EnumField('IncludeTravel', ContractTemplates);
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<ContractTemplates> = new StringField('Remarks', ContractTemplates, 'Edm.String');
  /**
   * Static representation of the [[includeHolidays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_HOLIDAYS: EnumField<ContractTemplates> = new EnumField('IncludeHolidays', ContractTemplates);
  /**
   * Static representation of the [[responseUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_UNIT: EnumField<ContractTemplates> = new EnumField('ResponseUnit', ContractTemplates);
  /**
   * Static representation of the [[resolutionTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLUTION_TIME: NumberField<ContractTemplates> = new NumberField('ResolutionTime', ContractTemplates, 'Edm.Int32');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<ContractTemplates> = new NumberField('AttachmentEntry', ContractTemplates, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<ContractTemplates, Items> = new OneToManyLink('Items', ContractTemplates, Items);
  /**
   * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CONTRACTS: OneToManyLink<ContractTemplates, ServiceContracts> = new OneToManyLink('ServiceContracts', ContractTemplates, ServiceContracts);
  /**
   * All fields of the ContractTemplates entity.
   */
  export const _allFields: Array<StringField<ContractTemplates> | EnumField<ContractTemplates> | NumberField<ContractTemplates> | TimeField<ContractTemplates> | OneToManyLink<ContractTemplates, Items> | OneToManyLink<ContractTemplates, ServiceContracts>> = [
    ContractTemplates.TEMPLATE_NAME,
    ContractTemplates.TEMPLATE_IS_DELETED,
    ContractTemplates.TEMPLATE_IS_RENEWAL,
    ContractTemplates.REMIND_BEFORE_RENEWAL,
    ContractTemplates.REMIND_UNIT,
    ContractTemplates.DURATION_OF_COVERAGE,
    ContractTemplates.RESPONSE_VALUE,
    ContractTemplates.RESOLUTION_UNIT,
    ContractTemplates.DESCRIPTION,
    ContractTemplates.CONTRACT_TYPE,
    ContractTemplates.MONDAY_ENABLED,
    ContractTemplates.TUESDAY_ENABLED,
    ContractTemplates.WEDNESDAY_ENABLED,
    ContractTemplates.THURSDAY_ENABLED,
    ContractTemplates.FRIDAY_ENABLED,
    ContractTemplates.SATURDAY_ENABLED,
    ContractTemplates.SUNDAY_ENABLED,
    ContractTemplates.MONDAY_START,
    ContractTemplates.MONDAY_END,
    ContractTemplates.TUESDAY_START,
    ContractTemplates.TUESDAY_END,
    ContractTemplates.WEDNESDAY_START,
    ContractTemplates.WEDNESDAY_END,
    ContractTemplates.THURSDAY_START,
    ContractTemplates.THURSDAY_END,
    ContractTemplates.FRIDAY_START,
    ContractTemplates.FRIDAY_END,
    ContractTemplates.SATURDAY_START,
    ContractTemplates.SATURDAY_END,
    ContractTemplates.SUNDAY_START,
    ContractTemplates.SUNDAY_END,
    ContractTemplates.INCLUDE_PARTS,
    ContractTemplates.INCLUDE_LABOR,
    ContractTemplates.INCLUDE_TRAVEL,
    ContractTemplates.REMARKS,
    ContractTemplates.INCLUDE_HOLIDAYS,
    ContractTemplates.RESPONSE_UNIT,
    ContractTemplates.RESOLUTION_TIME,
    ContractTemplates.ATTACHMENT_ENTRY,
    ContractTemplates.ITEMS,
    ContractTemplates.SERVICE_CONTRACTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ContractTemplates> = new AllFields('*', ContractTemplates);
  /**
   * All key fields of the ContractTemplates entity.
   */
  export const _keyFields: Array<Field<ContractTemplates>> = [ContractTemplates.TEMPLATE_NAME];
  /**
   * Mapping of all key field names to the respective static field property ContractTemplates.
   */
  export const _keys: { [keys: string]: Field<ContractTemplates> } = ContractTemplates._keyFields.reduce((acc: { [keys: string]: Field<ContractTemplates> }, field: Field<ContractTemplates>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
