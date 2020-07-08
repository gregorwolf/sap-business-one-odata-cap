/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * FeatureStatus
 */
export interface FeatureStatus {
  /**
   * Feature Id.
   * @nullable
   */
  featureId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[FeatureStatus.build]] instead.
 */
export function createFeatureStatus(json: any): FeatureStatus {
  return FeatureStatus.build(json);
}

/**
 * FeatureStatusField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FeatureStatusField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[FeatureStatus.featureId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  featureId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FeatureID', this, 'Edm.String');
}

export namespace FeatureStatus {
  export function build(json: { [keys: string]: FieldType }): FeatureStatus {
    return createComplexType(json, {
      FeatureID: (featureId: string) => ({ featureId: edmToTs(featureId, 'Edm.String') })
    });
  }
}
