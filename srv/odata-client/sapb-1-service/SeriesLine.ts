/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SeriesLine
 */
export interface SeriesLine {
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Prefix.
   * @nullable
   */
  prefix?: string;
  /**
   * First Num.
   * @nullable
   */
  firstNum?: number;
  /**
   * Next Num.
   * @nullable
   */
  nextNum?: number;
  /**
   * Last Num.
   * @nullable
   */
  lastNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SeriesLine.build]] instead.
 */
export function createSeriesLine(json: any): SeriesLine {
  return SeriesLine.build(json);
}

/**
 * SeriesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SeriesLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SeriesLine> {
  /**
   * Representation of the [[SeriesLine.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[SeriesLine.prefix]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  prefix: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Prefix', this, 'Edm.String');
  /**
   * Representation of the [[SeriesLine.firstNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FirstNum', this, 'Edm.Int32');
  /**
   * Representation of the [[SeriesLine.nextNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NextNum', this, 'Edm.Int32');
  /**
   * Representation of the [[SeriesLine.lastNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LastNum', this, 'Edm.Int32');

  /**
   * Creates an instance of SeriesLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SeriesLine);
  }
}

export namespace SeriesLine {
  /**
   * Metadata information on all properties of the `SeriesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SeriesLine>[] = [{
    originalName: 'Series',
    name: 'series',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Prefix',
    name: 'prefix',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FirstNum',
    name: 'firstNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NextNum',
    name: 'nextNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LastNum',
    name: 'lastNum',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SeriesLine {
    return deserializeComplexTypeV4(json, SeriesLine);
  }
}
