/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlertManagementsRequestBuilder } from './AlertManagementsRequestBuilder';
import { Moment } from 'moment';
import { AlertManagementRecipient } from './AlertManagementRecipient';
import { AlertManagementDocument } from './AlertManagementDocument';
import { AlertManagementTypeEnum } from './AlertManagementTypeEnum';
import { AlertManagementPriorityEnum } from './AlertManagementPriorityEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AlertManagementFrequencyType } from './AlertManagementFrequencyType';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AlertManagements" of service "SAPB1".
 */
export class AlertManagements extends EntityV4 implements AlertManagementsType {
  /**
   * Technical entity name for AlertManagements.
   */
  static _entityName = 'AlertManagements';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Type.
   * @nullable
   */
  type?: AlertManagementTypeEnum;
  /**
   * Priority.
   * @nullable
   */
  priority?: AlertManagementPriorityEnum;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum;
  /**
   * Param.
   * @nullable
   */
  param?: string;
  /**
   * Query Id.
   * @nullable
   */
  queryId?: number;
  /**
   * Frequency Type.
   * @nullable
   */
  frequencyType?: AlertManagementFrequencyType;
  /**
   * Day Of Execution.
   * @nullable
   */
  dayOfExecution?: number;
  /**
   * Execution Time.
   * @nullable
   */
  executionTime?: Time;
  /**
   * Last Execution Date.
   * @nullable
   */
  lastExecutionDate?: Moment;
  /**
   * Last Execution Time.
   * @nullable
   */
  lastExecutionTime?: number;
  /**
   * Next Execution Date.
   * @nullable
   */
  nextExecutionDate?: Moment;
  /**
   * Next Execution Time.
   * @nullable
   */
  nextExecutionTime?: Time;
  /**
   * Save History.
   * @nullable
   */
  saveHistory?: BoYesNoEnum;
  /**
   * Frequency Interval.
   * @nullable
   */
  frequencyInterval?: number;
  /**
   * Alert Management Recipients.
   * @nullable
   */
  alertManagementRecipients?: AlertManagementRecipient[];
  /**
   * Alert Management Documents.
   * @nullable
   */
  alertManagementDocuments?: AlertManagementDocument[];

  /**
   * Returns an entity builder to construct instances of `AlertManagements`.
   * @returns A builder that constructs instances of entity type `AlertManagements`.
   */
  static builder(): EntityBuilderType<AlertManagements, AlertManagementsType> {
    return EntityV4.entityBuilder(AlertManagements);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AlertManagements` entity type.
   * @returns A `AlertManagements` request builder.
   */
  static requestBuilder(): AlertManagementsRequestBuilder {
    return new AlertManagementsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AlertManagements`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AlertManagements`.
   */
  static customField(fieldName: string): CustomFieldV4<AlertManagements> {
    return EntityV4.customFieldSelector(fieldName, AlertManagements);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface AlertManagementsType {
  code?: number | null;
  name?: string | null;
  type?: AlertManagementTypeEnum | null;
  priority?: AlertManagementPriorityEnum | null;
  active?: BoYesNoEnum | null;
  param?: string | null;
  queryId?: number | null;
  frequencyType?: AlertManagementFrequencyType | null;
  dayOfExecution?: number | null;
  executionTime?: Time | null;
  lastExecutionDate?: Moment | null;
  lastExecutionTime?: number | null;
  nextExecutionDate?: Moment | null;
  nextExecutionTime?: Time | null;
  saveHistory?: BoYesNoEnum | null;
  frequencyInterval?: number | null;
  alertManagementRecipients?: AlertManagementRecipient[] | null;
  alertManagementDocuments?: AlertManagementDocument[] | null;
}

export namespace AlertManagements {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<AlertManagements> = new NumberField('Code', AlertManagements, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<AlertManagements> = new StringField('Name', AlertManagements, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: EnumField<AlertManagements> = new EnumField('Type', AlertManagements);
  /**
   * Static representation of the [[priority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIORITY: EnumField<AlertManagements> = new EnumField('Priority', AlertManagements);
  /**
   * Static representation of the [[active]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE: EnumField<AlertManagements> = new EnumField('Active', AlertManagements);
  /**
   * Static representation of the [[param]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARAM: StringField<AlertManagements> = new StringField('Param', AlertManagements, 'Edm.String');
  /**
   * Static representation of the [[queryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUERY_ID: NumberField<AlertManagements> = new NumberField('QueryID', AlertManagements, 'Edm.Int32');
  /**
   * Static representation of the [[frequencyType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY_TYPE: EnumField<AlertManagements> = new EnumField('FrequencyType', AlertManagements);
  /**
   * Static representation of the [[dayOfExecution]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAY_OF_EXECUTION: NumberField<AlertManagements> = new NumberField('DayOfExecution', AlertManagements, 'Edm.Int32');
  /**
   * Static representation of the [[executionTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXECUTION_TIME: TimeField<AlertManagements> = new TimeField('ExecutionTime', AlertManagements, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[lastExecutionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_EXECUTION_DATE: DateField<AlertManagements> = new DateField('LastExecutionDate', AlertManagements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastExecutionTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_EXECUTION_TIME: NumberField<AlertManagements> = new NumberField('LastExecutionTime', AlertManagements, 'Edm.Int32');
  /**
   * Static representation of the [[nextExecutionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_EXECUTION_DATE: DateField<AlertManagements> = new DateField('NextExecutionDate', AlertManagements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[nextExecutionTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_EXECUTION_TIME: TimeField<AlertManagements> = new TimeField('NextExecutionTime', AlertManagements, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[saveHistory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAVE_HISTORY: EnumField<AlertManagements> = new EnumField('SaveHistory', AlertManagements);
  /**
   * Static representation of the [[frequencyInterval]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY_INTERVAL: NumberField<AlertManagements> = new NumberField('FrequencyInterval', AlertManagements, 'Edm.Int32');
  /**
   * Static representation of the [[alertManagementRecipients]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_MANAGEMENT_RECIPIENTS: CollectionField<AlertManagements, AlertManagementRecipient> = new CollectionField('AlertManagementRecipients', AlertManagements, AlertManagementRecipient);
  /**
   * Static representation of the [[alertManagementDocuments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_MANAGEMENT_DOCUMENTS: CollectionField<AlertManagements, AlertManagementDocument> = new CollectionField('AlertManagementDocuments', AlertManagements, AlertManagementDocument);
  /**
   * All fields of the AlertManagements entity.
   */
  export const _allFields: Array<NumberField<AlertManagements> | StringField<AlertManagements> | EnumField<AlertManagements> | TimeField<AlertManagements> | DateField<AlertManagements> | CollectionField<AlertManagements, AlertManagementRecipient> | CollectionField<AlertManagements, AlertManagementDocument>> = [
    AlertManagements.CODE,
    AlertManagements.NAME,
    AlertManagements.TYPE,
    AlertManagements.PRIORITY,
    AlertManagements.ACTIVE,
    AlertManagements.PARAM,
    AlertManagements.QUERY_ID,
    AlertManagements.FREQUENCY_TYPE,
    AlertManagements.DAY_OF_EXECUTION,
    AlertManagements.EXECUTION_TIME,
    AlertManagements.LAST_EXECUTION_DATE,
    AlertManagements.LAST_EXECUTION_TIME,
    AlertManagements.NEXT_EXECUTION_DATE,
    AlertManagements.NEXT_EXECUTION_TIME,
    AlertManagements.SAVE_HISTORY,
    AlertManagements.FREQUENCY_INTERVAL,
    AlertManagements.ALERT_MANAGEMENT_RECIPIENTS,
    AlertManagements.ALERT_MANAGEMENT_DOCUMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AlertManagements> = new AllFields('*', AlertManagements);
  /**
   * All key fields of the AlertManagements entity.
   */
  export const _keyFields: Array<Field<AlertManagements>> = [AlertManagements.CODE];
  /**
   * Mapping of all key field names to the respective static field property AlertManagements.
   */
  export const _keys: { [keys: string]: Field<AlertManagements> } = AlertManagements._keyFields.reduce((acc: { [keys: string]: Field<AlertManagements> }, field: Field<AlertManagements>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
