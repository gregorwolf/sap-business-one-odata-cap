/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * FeatureStatus
 */
export interface FeatureStatus {
  /**
   * Feature Id.
   * @nullable
   */
  featureId?: string;
  /**
   * Blocked.
   * @nullable
   */
  blocked?: BoYesNoEnum;
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
export class FeatureStatusField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FeatureStatus> {
  /**
   * Representation of the [[FeatureStatus.featureId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  featureId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FeatureID', this, 'Edm.String');
  /**
   * Representation of the [[FeatureStatus.blocked]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blocked: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Blocked', this);

  /**
   * Creates an instance of FeatureStatusField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FeatureStatus);
  }
}

export namespace FeatureStatus {
  /**
   * Metadata information on all properties of the `FeatureStatus` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FeatureStatus>[] = [{
    originalName: 'FeatureID',
    name: 'featureId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Blocked',
    name: 'blocked',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FeatureStatus {
    return deserializeComplexTypeV4(json, FeatureStatus);
  }
}
