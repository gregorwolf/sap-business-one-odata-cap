/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetornoCodesRequestBuilder } from './RetornoCodesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "RetornoCodes" of service "SAPB1".
 */
export class RetornoCodes extends Entity implements RetornoCodesType {
  /**
   * Technical entity name for RetornoCodes.
   */
  static _entityName = 'RetornoCodes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RetornoCodes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Occurence Code.
   * @nullable
   */
  occurenceCode?: number;
  /**
   * Movement Code.
   * @nullable
   */
  movementCode?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Color.
   * @nullable
   */
  color?: number;
  /**
   * File Format.
   * @nullable
   */
  fileFormat?: string;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: string;

  /**
   * Returns an entity builder to construct instances `RetornoCodes`.
   * @returns A builder that constructs instances of entity type `RetornoCodes`.
   */
  static builder(): EntityBuilderType<RetornoCodes, RetornoCodesTypeForceMandatory> {
    return Entity.entityBuilder(RetornoCodes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RetornoCodes` entity type.
   * @returns A `RetornoCodes` request builder.
   */
  static requestBuilder(): RetornoCodesRequestBuilder {
    return new RetornoCodesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RetornoCodes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RetornoCodes`.
   */
  static customField(fieldName: string): CustomField<RetornoCodes> {
    return Entity.customFieldSelector(fieldName, RetornoCodes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface RetornoCodesType {
  absEntry?: number;
  occurenceCode?: number;
  movementCode?: number;
  description?: string;
  color?: number;
  fileFormat?: string;
  bankCode?: string;
}

export interface RetornoCodesTypeForceMandatory {
  absEntry: number;
  occurenceCode: number;
  movementCode: number;
  description: string;
  color: number;
  fileFormat: string;
  bankCode: string;
}

export namespace RetornoCodes {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<RetornoCodes> = new NumberField('AbsEntry', RetornoCodes, 'Edm.Int32');
  /**
   * Static representation of the [[occurenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCURENCE_CODE: NumberField<RetornoCodes> = new NumberField('OccurenceCode', RetornoCodes, 'Edm.Int32');
  /**
   * Static representation of the [[movementCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOVEMENT_CODE: NumberField<RetornoCodes> = new NumberField('MovementCode', RetornoCodes, 'Edm.Int32');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<RetornoCodes> = new StringField('Description', RetornoCodes, 'Edm.String');
  /**
   * Static representation of the [[color]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLOR: NumberField<RetornoCodes> = new NumberField('Color', RetornoCodes, 'Edm.Int32');
  /**
   * Static representation of the [[fileFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_FORMAT: StringField<RetornoCodes> = new StringField('FileFormat', RetornoCodes, 'Edm.String');
  /**
   * Static representation of the [[bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CODE: StringField<RetornoCodes> = new StringField('BankCode', RetornoCodes, 'Edm.String');
  /**
   * All fields of the RetornoCodes entity.
   */
  export const _allFields: Array<NumberField<RetornoCodes> | StringField<RetornoCodes>> = [
    RetornoCodes.ABS_ENTRY,
    RetornoCodes.OCCURENCE_CODE,
    RetornoCodes.MOVEMENT_CODE,
    RetornoCodes.DESCRIPTION,
    RetornoCodes.COLOR,
    RetornoCodes.FILE_FORMAT,
    RetornoCodes.BANK_CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RetornoCodes> = new AllFields('*', RetornoCodes);
  /**
   * All key fields of the RetornoCodes entity.
   */
  export const _keyFields: Array<Field<RetornoCodes>> = [RetornoCodes.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property RetornoCodes.
   */
  export const _keys: { [keys: string]: Field<RetornoCodes> } = RetornoCodes._keyFields.reduce((acc: { [keys: string]: Field<RetornoCodes> }, field: Field<RetornoCodes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
