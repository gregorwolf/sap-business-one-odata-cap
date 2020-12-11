/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PredefinedTextParams
 */
export interface PredefinedTextParams {
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
  /**
   * Text Code.
   * @nullable
   */
  textCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PredefinedTextParams.build]] instead.
 */
export function createPredefinedTextParams(json: any): PredefinedTextParams {
  return PredefinedTextParams.build(json);
}

/**
 * PredefinedTextParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PredefinedTextParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PredefinedTextParams> {
  /**
   * Representation of the [[PredefinedTextParams.numerator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numerator: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Numerator', this, 'Edm.Int32');
  /**
   * Representation of the [[PredefinedTextParams.textCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TextCode', this, 'Edm.String');

  /**
   * Creates an instance of PredefinedTextParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PredefinedTextParams);
  }
}

export namespace PredefinedTextParams {
  /**
   * Metadata information on all properties of the `PredefinedTextParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PredefinedTextParams>[] = [{
    originalName: 'Numerator',
    name: 'numerator',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TextCode',
    name: 'textCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PredefinedTextParams {
    return deserializeComplexTypeV4(json, PredefinedTextParams);
  }
}
