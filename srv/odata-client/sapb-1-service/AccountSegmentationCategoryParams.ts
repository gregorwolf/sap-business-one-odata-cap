/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AccountSegmentationCategoryParams
 */
export interface AccountSegmentationCategoryParams {
  /**
   * Segment Id.
   * @nullable
   */
  segmentId?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationCategoryParams.build]] instead.
 */
export function createAccountSegmentationCategoryParams(json: any): AccountSegmentationCategoryParams {
  return AccountSegmentationCategoryParams.build(json);
}

/**
 * AccountSegmentationCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AccountSegmentationCategoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AccountSegmentationCategoryParams> {
  /**
   * Representation of the [[AccountSegmentationCategoryParams.segmentId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  segmentId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SegmentID', this, 'Edm.Int32');
  /**
   * Representation of the [[AccountSegmentationCategoryParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');

  /**
   * Creates an instance of AccountSegmentationCategoryParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AccountSegmentationCategoryParams);
  }
}

export namespace AccountSegmentationCategoryParams {
  /**
   * Metadata information on all properties of the `AccountSegmentationCategoryParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AccountSegmentationCategoryParams>[] = [{
    originalName: 'SegmentID',
    name: 'segmentId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AccountSegmentationCategoryParams {
    return deserializeComplexTypeV4(json, AccountSegmentationCategoryParams);
  }
}
