/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * IndustryParams
 */
export interface IndustryParams {
  /**
   * Industry Code.
   * @nullable
   */
  industryCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[IndustryParams.build]] instead.
 */
export function createIndustryParams(json: any): IndustryParams {
  return IndustryParams.build(json);
}

/**
 * IndustryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class IndustryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, IndustryParams> {
  /**
   * Representation of the [[IndustryParams.industryCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  industryCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('IndustryCode', this, 'Edm.Int32');

  /**
   * Creates an instance of IndustryParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, IndustryParams);
  }
}

export namespace IndustryParams {
  /**
   * Metadata information on all properties of the `IndustryParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<IndustryParams>[] = [{
    originalName: 'IndustryCode',
    name: 'industryCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): IndustryParams {
    return deserializeComplexTypeV4(json, IndustryParams);
  }
}
