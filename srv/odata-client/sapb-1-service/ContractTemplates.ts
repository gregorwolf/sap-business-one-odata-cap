/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContractTemplatesRequestBuilder } from './ContractTemplatesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ContractTemplates" of service "SAPB1".
 */
export class ContractTemplates extends Entity implements ContractTemplatesType {
  /**
   * Technical entity name for ContractTemplates.
   */
  static _entityName = 'ContractTemplates';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ContractTemplates.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Template Name.
   * @nullable
   */
  templateName?: string;
  /**
   * Remind Before Renewal.
   * @nullable
   */
  remindBeforeRenewal?: number;
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
   * Remarks.
   * @nullable
   */
  remarks?: string;
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
   * Returns an entity builder to construct instances `ContractTemplates`.
   * @returns A builder that constructs instances of entity type `ContractTemplates`.
   */
  static builder(): EntityBuilderType<ContractTemplates, ContractTemplatesTypeForceMandatory> {
    return Entity.entityBuilder(ContractTemplates);
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
  static customField(fieldName: string): CustomField<ContractTemplates> {
    return Entity.customFieldSelector(fieldName, ContractTemplates);
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
  templateName?: string;
  remindBeforeRenewal?: number;
  durationOfCoverage?: number;
  responseValue?: number;
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
  remarks?: string;
  resolutionTime?: number;
  attachmentEntry?: number;
  items: ItemsType[];
  serviceContracts: ServiceContractsType[];
}

export interface ContractTemplatesTypeForceMandatory {
  templateName: string;
  remindBeforeRenewal: number;
  durationOfCoverage: number;
  responseValue: number;
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
  remarks: string;
  resolutionTime: number;
  attachmentEntry: number;
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
   * Static representation of the [[remindBeforeRenewal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMIND_BEFORE_RENEWAL: NumberField<ContractTemplates> = new NumberField('RemindBeforeRenewal', ContractTemplates, 'Edm.Int32');
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
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ContractTemplates> = new StringField('Description', ContractTemplates, 'Edm.String');
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
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<ContractTemplates> = new StringField('Remarks', ContractTemplates, 'Edm.String');
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
  export const _allFields: Array<StringField<ContractTemplates> | NumberField<ContractTemplates> | TimeField<ContractTemplates> | OneToManyLink<ContractTemplates, Items> | OneToManyLink<ContractTemplates, ServiceContracts>> = [
    ContractTemplates.TEMPLATE_NAME,
    ContractTemplates.REMIND_BEFORE_RENEWAL,
    ContractTemplates.DURATION_OF_COVERAGE,
    ContractTemplates.RESPONSE_VALUE,
    ContractTemplates.DESCRIPTION,
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
    ContractTemplates.REMARKS,
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
