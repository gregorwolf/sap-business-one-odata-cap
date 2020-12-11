/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DeterminationCriteriaParams
 */
export interface DeterminationCriteriaParams {
  /**
   * Dmc Id.
   * @nullable
   */
  dmcId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DeterminationCriteriaParams.build]] instead.
 */
export function createDeterminationCriteriaParams(json: any): DeterminationCriteriaParams {
  return DeterminationCriteriaParams.build(json);
}

/**
 * DeterminationCriteriaParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeterminationCriteriaParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DeterminationCriteriaParams> {
  /**
   * Representation of the [[DeterminationCriteriaParams.dmcId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dmcId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DmcId', this, 'Edm.Int32');

  /**
   * Creates an instance of DeterminationCriteriaParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DeterminationCriteriaParams);
  }
}

export namespace DeterminationCriteriaParams {
  /**
   * Metadata information on all properties of the `DeterminationCriteriaParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DeterminationCriteriaParams>[] = [{
    originalName: 'DmcId',
    name: 'dmcId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DeterminationCriteriaParams {
    return deserializeComplexTypeV4(json, DeterminationCriteriaParams);
  }
}
