/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WtdValueRange
 */
export interface WtdValueRange {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Seq Num.
   * @nullable
   */
  seqNum?: number;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: Moment;
  /**
   * Value From.
   * @nullable
   */
  valueFrom?: number;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WtdValueRange.build]] instead.
 */
export function createWtdValueRange(json: any): WtdValueRange {
  return WtdValueRange.build(json);
}

/**
 * WtdValueRangeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdValueRangeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtdValueRange> {
  /**
   * Representation of the [[WtdValueRange.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[WtdValueRange.seqNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seqNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SeqNum', this, 'Edm.Int32');
  /**
   * Representation of the [[WtdValueRange.effectiveFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WtdValueRange.valueFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valueFrom: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ValueFrom', this, 'Edm.Double');
  /**
   * Representation of the [[WtdValueRange.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');

  /**
   * Creates an instance of WtdValueRangeField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WtdValueRange);
  }
}

export namespace WtdValueRange {
  /**
   * Metadata information on all properties of the `WtdValueRange` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WtdValueRange>[] = [{
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SeqNum',
    name: 'seqNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EffectiveFrom',
    name: 'effectiveFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ValueFrom',
    name: 'valueFrom',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WtdValueRange {
    return deserializeComplexTypeV4(json, WtdValueRange);
  }
}
