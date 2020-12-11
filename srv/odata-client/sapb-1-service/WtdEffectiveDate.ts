/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { WtdValueRange } from './WtdValueRange';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WtdEffectiveDate
 */
export interface WtdEffectiveDate {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: Moment;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Wtd Value Range Collection.
   * @nullable
   */
  wtdValueRangeCollection?: WtdValueRange[];
}

/**
 * @deprecated Since v1.6.0. Use [[WtdEffectiveDate.build]] instead.
 */
export function createWtdEffectiveDate(json: any): WtdEffectiveDate {
  return WtdEffectiveDate.build(json);
}

/**
 * WtdEffectiveDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdEffectiveDateField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtdEffectiveDate> {
  /**
   * Representation of the [[WtdEffectiveDate.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[WtdEffectiveDate.effectiveFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WtdEffectiveDate.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[WtdEffectiveDate.wtdValueRangeCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtdValueRangeCollection: CollectionField<EntityT, WtdValueRange> = new CollectionField('WTDValueRangeCollection', this, WtdValueRange);

  /**
   * Creates an instance of WtdEffectiveDateField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WtdEffectiveDate);
  }
}

export namespace WtdEffectiveDate {
  /**
   * Metadata information on all properties of the `WtdEffectiveDate` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WtdEffectiveDate>[] = [{
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EffectiveFrom',
    name: 'effectiveFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WTDValueRangeCollection',
    name: 'wtdValueRangeCollection',
    type: WtdValueRange,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | WtdValueRange }): WtdEffectiveDate {
    return deserializeComplexTypeV4(json, WtdEffectiveDate);
  }
}
