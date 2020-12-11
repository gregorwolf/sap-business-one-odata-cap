/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OccurrenceCodesRequestBuilder } from './OccurrenceCodesRequestBuilder';
import { BoBoeStatus } from './BoBoeStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OccurrenceCodes" of service "SAPB1".
 */
export class OccurrenceCodes extends EntityV4 implements OccurrenceCodesType {
  /**
   * Technical entity name for OccurrenceCodes.
   */
  static _entityName = 'OccurrenceCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Note.
   * @nullable
   */
  note?: string;
  /**
   * Requested Boe Status.
   * @nullable
   */
  requestedBoeStatus?: BoBoeStatus;
  /**
   * Is Movement.
   * @nullable
   */
  isMovement?: BoYesNoEnum;

  /**
   * Returns an entity builder to construct instances of `OccurrenceCodes`.
   * @returns A builder that constructs instances of entity type `OccurrenceCodes`.
   */
  static builder(): EntityBuilderType<OccurrenceCodes, OccurrenceCodesType> {
    return EntityV4.entityBuilder(OccurrenceCodes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `OccurrenceCodes` entity type.
   * @returns A `OccurrenceCodes` request builder.
   */
  static requestBuilder(): OccurrenceCodesRequestBuilder {
    return new OccurrenceCodesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `OccurrenceCodes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `OccurrenceCodes`.
   */
  static customField(fieldName: string): CustomFieldV4<OccurrenceCodes> {
    return EntityV4.customFieldSelector(fieldName, OccurrenceCodes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface OccurrenceCodesType {
  absEntry?: number | null;
  code?: string | null;
  description?: string | null;
  note?: string | null;
  requestedBoeStatus?: BoBoeStatus | null;
  isMovement?: BoYesNoEnum | null;
}

export namespace OccurrenceCodes {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<OccurrenceCodes> = new NumberField('AbsEntry', OccurrenceCodes, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<OccurrenceCodes> = new StringField('Code', OccurrenceCodes, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<OccurrenceCodes> = new StringField('Description', OccurrenceCodes, 'Edm.String');
  /**
   * Static representation of the [[note]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTE: StringField<OccurrenceCodes> = new StringField('Note', OccurrenceCodes, 'Edm.String');
  /**
   * Static representation of the [[requestedBoeStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTED_BOE_STATUS: EnumField<OccurrenceCodes> = new EnumField('RequestedBoeStatus', OccurrenceCodes);
  /**
   * Static representation of the [[isMovement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_MOVEMENT: EnumField<OccurrenceCodes> = new EnumField('IsMovement', OccurrenceCodes);
  /**
   * All fields of the OccurrenceCodes entity.
   */
  export const _allFields: Array<NumberField<OccurrenceCodes> | StringField<OccurrenceCodes> | EnumField<OccurrenceCodes>> = [
    OccurrenceCodes.ABS_ENTRY,
    OccurrenceCodes.CODE,
    OccurrenceCodes.DESCRIPTION,
    OccurrenceCodes.NOTE,
    OccurrenceCodes.REQUESTED_BOE_STATUS,
    OccurrenceCodes.IS_MOVEMENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<OccurrenceCodes> = new AllFields('*', OccurrenceCodes);
  /**
   * All key fields of the OccurrenceCodes entity.
   */
  export const _keyFields: Array<Field<OccurrenceCodes>> = [OccurrenceCodes.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property OccurrenceCodes.
   */
  export const _keys: { [keys: string]: Field<OccurrenceCodes> } = OccurrenceCodes._keyFields.reduce((acc: { [keys: string]: Field<OccurrenceCodes> }, field: Field<OccurrenceCodes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
