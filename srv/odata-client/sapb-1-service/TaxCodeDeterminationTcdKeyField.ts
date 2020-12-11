/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationTcdKeyFieldValue } from './TaxCodeDeterminationTcdKeyFieldValue';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxCodeDeterminationTcdKeyField
 */
export interface TaxCodeDeterminationTcdKeyField {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Descr.
   * @nullable
   */
  descr?: string;
  /**
   * Priority.
   * @nullable
   */
  priority?: number;
  /**
   * Key Fld 1.
   * @nullable
   */
  keyFld1?: number;
  /**
   * Udf Table 1.
   * @nullable
   */
  udfTable1?: string;
  /**
   * Udf Alias 1.
   * @nullable
   */
  udfAlias1?: string;
  /**
   * Key Fld 2.
   * @nullable
   */
  keyFld2?: number;
  /**
   * Udf Table 2.
   * @nullable
   */
  udfTable2?: string;
  /**
   * Udf Alias 2.
   * @nullable
   */
  udfAlias2?: string;
  /**
   * Key Fld 3.
   * @nullable
   */
  keyFld3?: number;
  /**
   * Udf Table 3.
   * @nullable
   */
  udfTable3?: string;
  /**
   * Udf Alias 3.
   * @nullable
   */
  udfAlias3?: string;
  /**
   * Key Fld 4.
   * @nullable
   */
  keyFld4?: number;
  /**
   * Udf Table 4.
   * @nullable
   */
  udfTable4?: string;
  /**
   * Udf Alias 4.
   * @nullable
   */
  udfAlias4?: string;
  /**
   * Tax Code Determination Tcd Key Field Values.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValues?: TaxCodeDeterminationTcdKeyFieldValue[];
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyField.build]] instead.
 */
export function createTaxCodeDeterminationTcdKeyField(json: any): TaxCodeDeterminationTcdKeyField {
  return TaxCodeDeterminationTcdKeyField.build(json);
}

/**
 * TaxCodeDeterminationTcdKeyFieldField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdKeyField> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.descr]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  descr: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Descr', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.priority]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Priority', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyFld_1', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFTable_1', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFAlias_1', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyFld_2', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFTable_2', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFAlias_2', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyFld_3', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFTable_3', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFAlias_3', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld4: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyFld_4', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFTable_4', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFAlias_4', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.taxCodeDeterminationTcdKeyFieldValues]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValues: CollectionField<EntityT, TaxCodeDeterminationTcdKeyFieldValue> = new CollectionField('TaxCodeDeterminationTCDKeyFieldValues', this, TaxCodeDeterminationTcdKeyFieldValue);

  /**
   * Creates an instance of TaxCodeDeterminationTcdKeyFieldField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxCodeDeterminationTcdKeyField);
  }
}

export namespace TaxCodeDeterminationTcdKeyField {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyField` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyField>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Descr',
    name: 'descr',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Priority',
    name: 'priority',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'KeyFld_1',
    name: 'keyFld1',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UDFTable_1',
    name: 'udfTable1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDFAlias_1',
    name: 'udfAlias1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'KeyFld_2',
    name: 'keyFld2',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UDFTable_2',
    name: 'udfTable2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDFAlias_2',
    name: 'udfAlias2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'KeyFld_3',
    name: 'keyFld3',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UDFTable_3',
    name: 'udfTable3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDFAlias_3',
    name: 'udfAlias3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'KeyFld_4',
    name: 'keyFld4',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UDFTable_4',
    name: 'udfTable4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDFAlias_4',
    name: 'udfAlias4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxCodeDeterminationTCDKeyFieldValues',
    name: 'taxCodeDeterminationTcdKeyFieldValues',
    type: TaxCodeDeterminationTcdKeyFieldValue,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValue }): TaxCodeDeterminationTcdKeyField {
    return deserializeComplexTypeV4(json, TaxCodeDeterminationTcdKeyField);
  }
}
