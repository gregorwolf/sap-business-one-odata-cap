/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmTimeSheetParams
 */
export interface PmTimeSheetParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PmTimeSheetParams.build]] instead.
 */
export function createPmTimeSheetParams(json: any): PmTimeSheetParams {
  return PmTimeSheetParams.build(json);
}

/**
 * PmTimeSheetParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmTimeSheetParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmTimeSheetParams> {
  /**
   * Representation of the [[PmTimeSheetParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of PmTimeSheetParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmTimeSheetParams);
  }
}

export namespace PmTimeSheetParams {
  /**
   * Metadata information on all properties of the `PmTimeSheetParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmTimeSheetParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmTimeSheetParams {
    return deserializeComplexTypeV4(json, PmTimeSheetParams);
  }
}
