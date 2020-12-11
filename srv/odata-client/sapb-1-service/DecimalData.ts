/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoundingContextEnum } from './RoundingContextEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DecimalData
 */
export interface DecimalData {
  /**
   * Value.
   * @nullable
   */
  value?: number;
  /**
   * Context.
   * @nullable
   */
  context?: RoundingContextEnum;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DecimalData.build]] instead.
 */
export function createDecimalData(json: any): DecimalData {
  return DecimalData.build(json);
}

/**
 * DecimalDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DecimalDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DecimalData> {
  /**
   * Representation of the [[DecimalData.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Value', this, 'Edm.Double');
  /**
   * Representation of the [[DecimalData.context]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  context: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Context', this);
  /**
   * Representation of the [[DecimalData.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');

  /**
   * Creates an instance of DecimalDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DecimalData);
  }
}

export namespace DecimalData {
  /**
   * Metadata information on all properties of the `DecimalData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DecimalData>[] = [{
    originalName: 'Value',
    name: 'value',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Context',
    name: 'context',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DecimalData {
    return deserializeComplexTypeV4(json, DecimalData);
  }
}
