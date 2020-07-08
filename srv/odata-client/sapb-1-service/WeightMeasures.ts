/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WeightMeasuresRequestBuilder } from './WeightMeasuresRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "WeightMeasures" of service "SAPB1".
 */
export class WeightMeasures extends Entity implements WeightMeasuresType {
  /**
   * Technical entity name for WeightMeasures.
   */
  static _entityName = 'WeightMeasures';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WeightMeasures.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Unit Weightinmg.
   * @nullable
   */
  unitWeightinmg?: number;
  /**
   * One-to-many navigation property to the [[BinLocations]] entity.
   */
  binLocations!: BinLocations[];

  /**
   * Returns an entity builder to construct instances `WeightMeasures`.
   * @returns A builder that constructs instances of entity type `WeightMeasures`.
   */
  static builder(): EntityBuilderType<WeightMeasures, WeightMeasuresTypeForceMandatory> {
    return Entity.entityBuilder(WeightMeasures);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WeightMeasures` entity type.
   * @returns A `WeightMeasures` request builder.
   */
  static requestBuilder(): WeightMeasuresRequestBuilder {
    return new WeightMeasuresRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WeightMeasures`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WeightMeasures`.
   */
  static customField(fieldName: string): CustomField<WeightMeasures> {
    return Entity.customFieldSelector(fieldName, WeightMeasures);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BinLocations, BinLocationsType } from './BinLocations';

export interface WeightMeasuresType {
  unitCode?: number;
  unitDisplay?: string;
  unitName?: string;
  unitWeightinmg?: number;
  binLocations: BinLocationsType[];
}

export interface WeightMeasuresTypeForceMandatory {
  unitCode: number;
  unitDisplay: string;
  unitName: string;
  unitWeightinmg: number;
  binLocations: BinLocationsType[];
}

export namespace WeightMeasures {
  /**
   * Static representation of the [[unitCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_CODE: NumberField<WeightMeasures> = new NumberField('UnitCode', WeightMeasures, 'Edm.Int32');
  /**
   * Static representation of the [[unitDisplay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_DISPLAY: StringField<WeightMeasures> = new StringField('UnitDisplay', WeightMeasures, 'Edm.String');
  /**
   * Static representation of the [[unitName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_NAME: StringField<WeightMeasures> = new StringField('UnitName', WeightMeasures, 'Edm.String');
  /**
   * Static representation of the [[unitWeightinmg]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_WEIGHTINMG: NumberField<WeightMeasures> = new NumberField('UnitWeightinmg', WeightMeasures, 'Edm.Double');
  /**
   * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIN_LOCATIONS: OneToManyLink<WeightMeasures, BinLocations> = new OneToManyLink('BinLocations', WeightMeasures, BinLocations);
  /**
   * All fields of the WeightMeasures entity.
   */
  export const _allFields: Array<NumberField<WeightMeasures> | StringField<WeightMeasures> | OneToManyLink<WeightMeasures, BinLocations>> = [
    WeightMeasures.UNIT_CODE,
    WeightMeasures.UNIT_DISPLAY,
    WeightMeasures.UNIT_NAME,
    WeightMeasures.UNIT_WEIGHTINMG,
    WeightMeasures.BIN_LOCATIONS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WeightMeasures> = new AllFields('*', WeightMeasures);
  /**
   * All key fields of the WeightMeasures entity.
   */
  export const _keyFields: Array<Field<WeightMeasures>> = [WeightMeasures.UNIT_CODE];
  /**
   * Mapping of all key field names to the respective static field property WeightMeasures.
   */
  export const _keys: { [keys: string]: Field<WeightMeasures> } = WeightMeasures._keyFields.reduce((acc: { [keys: string]: Field<WeightMeasures> }, field: Field<WeightMeasures>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
