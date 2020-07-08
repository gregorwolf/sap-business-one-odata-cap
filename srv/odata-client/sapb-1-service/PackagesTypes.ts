/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PackagesTypesRequestBuilder } from './PackagesTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "PackagesTypes" of service "SAPB1".
 */
export class PackagesTypes extends Entity implements PackagesTypesType {
  /**
   * Technical entity name for PackagesTypes.
   */
  static _entityName = 'PackagesTypes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PackagesTypes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Type.
   * @nullable
   */
  type?: string;
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Length 1.
   * @nullable
   */
  length1?: number;
  /**
   * Length 1 Unit.
   * @nullable
   */
  length1Unit?: number;
  /**
   * Length 2.
   * @nullable
   */
  length2?: number;
  /**
   * Length 2 Unit.
   * @nullable
   */
  length2Unit?: number;
  /**
   * Width 1.
   * @nullable
   */
  width1?: number;
  /**
   * Width 1 Unit.
   * @nullable
   */
  width1Unit?: number;
  /**
   * Width 2.
   * @nullable
   */
  width2?: number;
  /**
   * Width 2 Unit.
   * @nullable
   */
  width2Unit?: number;
  /**
   * Height 1.
   * @nullable
   */
  height1?: number;
  /**
   * Height 1 Unit.
   * @nullable
   */
  height1Unit?: number;
  /**
   * Height 2.
   * @nullable
   */
  height2?: number;
  /**
   * Height 2 Unit.
   * @nullable
   */
  height2Unit?: number;
  /**
   * Volume.
   * @nullable
   */
  volume?: number;
  /**
   * Volume Unit.
   * @nullable
   */
  volumeUnit?: number;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: number;
  /**
   * Weight 1 Unit.
   * @nullable
   */
  weight1Unit?: number;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: number;
  /**
   * Weight 2 Unit.
   * @nullable
   */
  weight2Unit?: number;

  /**
   * Returns an entity builder to construct instances `PackagesTypes`.
   * @returns A builder that constructs instances of entity type `PackagesTypes`.
   */
  static builder(): EntityBuilderType<PackagesTypes, PackagesTypesTypeForceMandatory> {
    return Entity.entityBuilder(PackagesTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PackagesTypes` entity type.
   * @returns A `PackagesTypes` request builder.
   */
  static requestBuilder(): PackagesTypesRequestBuilder {
    return new PackagesTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PackagesTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PackagesTypes`.
   */
  static customField(fieldName: string): CustomField<PackagesTypes> {
    return Entity.customFieldSelector(fieldName, PackagesTypes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface PackagesTypesType {
  type?: string;
  code?: number;
  length1?: number;
  length1Unit?: number;
  length2?: number;
  length2Unit?: number;
  width1?: number;
  width1Unit?: number;
  width2?: number;
  width2Unit?: number;
  height1?: number;
  height1Unit?: number;
  height2?: number;
  height2Unit?: number;
  volume?: number;
  volumeUnit?: number;
  weight1?: number;
  weight1Unit?: number;
  weight2?: number;
  weight2Unit?: number;
}

export interface PackagesTypesTypeForceMandatory {
  type: string;
  code: number;
  length1: number;
  length1Unit: number;
  length2: number;
  length2Unit: number;
  width1: number;
  width1Unit: number;
  width2: number;
  width2Unit: number;
  height1: number;
  height1Unit: number;
  height2: number;
  height2Unit: number;
  volume: number;
  volumeUnit: number;
  weight1: number;
  weight1Unit: number;
  weight2: number;
  weight2Unit: number;
}

export namespace PackagesTypes {
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<PackagesTypes> = new StringField('Type', PackagesTypes, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<PackagesTypes> = new NumberField('Code', PackagesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[length1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH_1: NumberField<PackagesTypes> = new NumberField('Length1', PackagesTypes, 'Edm.Double');
  /**
   * Static representation of the [[length1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH_1_UNIT: NumberField<PackagesTypes> = new NumberField('Length1Unit', PackagesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[length2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH_2: NumberField<PackagesTypes> = new NumberField('Length2', PackagesTypes, 'Edm.Double');
  /**
   * Static representation of the [[length2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH_2_UNIT: NumberField<PackagesTypes> = new NumberField('Length2Unit', PackagesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[width1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH_1: NumberField<PackagesTypes> = new NumberField('Width1', PackagesTypes, 'Edm.Double');
  /**
   * Static representation of the [[width1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH_1_UNIT: NumberField<PackagesTypes> = new NumberField('Width1Unit', PackagesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[width2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH_2: NumberField<PackagesTypes> = new NumberField('Width2', PackagesTypes, 'Edm.Double');
  /**
   * Static representation of the [[width2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH_2_UNIT: NumberField<PackagesTypes> = new NumberField('Width2Unit', PackagesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[height1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT_1: NumberField<PackagesTypes> = new NumberField('Height1', PackagesTypes, 'Edm.Double');
  /**
   * Static representation of the [[height1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT_1_UNIT: NumberField<PackagesTypes> = new NumberField('Height1Unit', PackagesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[height2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT_2: NumberField<PackagesTypes> = new NumberField('Height2', PackagesTypes, 'Edm.Double');
  /**
   * Static representation of the [[height2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT_2_UNIT: NumberField<PackagesTypes> = new NumberField('Height2Unit', PackagesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[volume]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VOLUME: NumberField<PackagesTypes> = new NumberField('Volume', PackagesTypes, 'Edm.Double');
  /**
   * Static representation of the [[volumeUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VOLUME_UNIT: NumberField<PackagesTypes> = new NumberField('VolumeUnit', PackagesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[weight1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_1: NumberField<PackagesTypes> = new NumberField('Weight1', PackagesTypes, 'Edm.Double');
  /**
   * Static representation of the [[weight1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_1_UNIT: NumberField<PackagesTypes> = new NumberField('Weight1Unit', PackagesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[weight2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_2: NumberField<PackagesTypes> = new NumberField('Weight2', PackagesTypes, 'Edm.Double');
  /**
   * Static representation of the [[weight2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_2_UNIT: NumberField<PackagesTypes> = new NumberField('Weight2Unit', PackagesTypes, 'Edm.Int32');
  /**
   * All fields of the PackagesTypes entity.
   */
  export const _allFields: Array<StringField<PackagesTypes> | NumberField<PackagesTypes>> = [
    PackagesTypes.TYPE,
    PackagesTypes.CODE,
    PackagesTypes.LENGTH_1,
    PackagesTypes.LENGTH_1_UNIT,
    PackagesTypes.LENGTH_2,
    PackagesTypes.LENGTH_2_UNIT,
    PackagesTypes.WIDTH_1,
    PackagesTypes.WIDTH_1_UNIT,
    PackagesTypes.WIDTH_2,
    PackagesTypes.WIDTH_2_UNIT,
    PackagesTypes.HEIGHT_1,
    PackagesTypes.HEIGHT_1_UNIT,
    PackagesTypes.HEIGHT_2,
    PackagesTypes.HEIGHT_2_UNIT,
    PackagesTypes.VOLUME,
    PackagesTypes.VOLUME_UNIT,
    PackagesTypes.WEIGHT_1,
    PackagesTypes.WEIGHT_1_UNIT,
    PackagesTypes.WEIGHT_2,
    PackagesTypes.WEIGHT_2_UNIT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PackagesTypes> = new AllFields('*', PackagesTypes);
  /**
   * All key fields of the PackagesTypes entity.
   */
  export const _keyFields: Array<Field<PackagesTypes>> = [PackagesTypes.CODE];
  /**
   * Mapping of all key field names to the respective static field property PackagesTypes.
   */
  export const _keys: { [keys: string]: Field<PackagesTypes> } = PackagesTypes._keyFields.reduce((acc: { [keys: string]: Field<PackagesTypes> }, field: Field<PackagesTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
