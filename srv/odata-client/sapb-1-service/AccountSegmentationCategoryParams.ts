/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class AccountSegmentationCategoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace AccountSegmentationCategoryParams {
  export function build(json: { [keys: string]: FieldType }): AccountSegmentationCategoryParams {
    return createComplexType(json, {
      SegmentID: (segmentId: number) => ({ segmentId: edmToTs(segmentId, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}
