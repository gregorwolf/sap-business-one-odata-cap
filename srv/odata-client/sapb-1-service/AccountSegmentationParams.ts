/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AccountSegmentationParams
 */
export interface AccountSegmentationParams {
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationParams.build]] instead.
 */
export function createAccountSegmentationParams(json: any): AccountSegmentationParams {
  return AccountSegmentationParams.build(json);
}

/**
 * AccountSegmentationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AccountSegmentationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AccountSegmentationParams> {
  /**
   * Representation of the [[AccountSegmentationParams.numerator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numerator: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Numerator', this, 'Edm.Int32');

  /**
   * Creates an instance of AccountSegmentationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AccountSegmentationParams);
  }
}

export namespace AccountSegmentationParams {
  /**
   * Metadata information on all properties of the `AccountSegmentationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AccountSegmentationParams>[] = [{
    originalName: 'Numerator',
    name: 'numerator',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AccountSegmentationParams {
    return deserializeComplexTypeV4(json, AccountSegmentationParams);
  }
}
