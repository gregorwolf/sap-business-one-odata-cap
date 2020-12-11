/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LengthMeasuresRequestBuilder } from './LengthMeasuresRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LengthMeasures" of service "SAPB1".
 */
export class LengthMeasures extends EntityV4 implements LengthMeasuresType {
  /**
   * Technical entity name for LengthMeasures.
   */
  static _entityName = 'LengthMeasures';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Unit Code.
   * @nullable
   */
  unitCode?: number;
  /**
   * Unit Display.
   * @nullable
   */
  unitDisplay?: string;
  /**
   * Unit Name.
   * @nullable
   */
  unitName?: string;
  /**
   * Unit Codefor Quantity Display.
   * @nullable
   */
  unitCodeforQuantityDisplay?: string;
  /**
   * Unit Lengthinmm.
   * @nullable
   */
  unitLengthinmm?: number;

  /**
   * Returns an entity builder to construct instances of `LengthMeasures`.
   * @returns A builder that constructs instances of entity type `LengthMeasures`.
   */
  static builder(): EntityBuilderType<LengthMeasures, LengthMeasuresType> {
    return EntityV4.entityBuilder(LengthMeasures);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LengthMeasures` entity type.
   * @returns A `LengthMeasures` request builder.
   */
  static requestBuilder(): LengthMeasuresRequestBuilder {
    return new LengthMeasuresRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LengthMeasures`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LengthMeasures`.
   */
  static customField(fieldName: string): CustomFieldV4<LengthMeasures> {
    return EntityV4.customFieldSelector(fieldName, LengthMeasures);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface LengthMeasuresType {
  unitCode?: number | null;
  unitDisplay?: string | null;
  unitName?: string | null;
  unitCodeforQuantityDisplay?: string | null;
  unitLengthinmm?: number | null;
}

export namespace LengthMeasures {
  /**
   * Static representation of the [[unitCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_CODE: NumberField<LengthMeasures> = new NumberField('UnitCode', LengthMeasures, 'Edm.Int32');
  /**
   * Static representation of the [[unitDisplay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_DISPLAY: StringField<LengthMeasures> = new StringField('UnitDisplay', LengthMeasures, 'Edm.String');
  /**
   * Static representation of the [[unitName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_NAME: StringField<LengthMeasures> = new StringField('UnitName', LengthMeasures, 'Edm.String');
  /**
   * Static representation of the [[unitCodeforQuantityDisplay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_CODEFOR_QUANTITY_DISPLAY: StringField<LengthMeasures> = new StringField('UnitCodeforQuantityDisplay', LengthMeasures, 'Edm.String');
  /**
   * Static representation of the [[unitLengthinmm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_LENGTHINMM: NumberField<LengthMeasures> = new NumberField('UnitLengthinmm', LengthMeasures, 'Edm.Double');
  /**
   * All fields of the LengthMeasures entity.
   */
  export const _allFields: Array<NumberField<LengthMeasures> | StringField<LengthMeasures>> = [
    LengthMeasures.UNIT_CODE,
    LengthMeasures.UNIT_DISPLAY,
    LengthMeasures.UNIT_NAME,
    LengthMeasures.UNIT_CODEFOR_QUANTITY_DISPLAY,
    LengthMeasures.UNIT_LENGTHINMM
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LengthMeasures> = new AllFields('*', LengthMeasures);
  /**
   * All key fields of the LengthMeasures entity.
   */
  export const _keyFields: Array<Field<LengthMeasures>> = [LengthMeasures.UNIT_CODE];
  /**
   * Mapping of all key field names to the respective static field property LengthMeasures.
   */
  export const _keys: { [keys: string]: Field<LengthMeasures> } = LengthMeasures._keyFields.reduce((acc: { [keys: string]: Field<LengthMeasures> }, field: Field<LengthMeasures>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
