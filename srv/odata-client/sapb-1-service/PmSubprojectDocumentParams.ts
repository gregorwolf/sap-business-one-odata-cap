/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmSubprojectDocumentParams
 */
export interface PmSubprojectDocumentParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PmSubprojectDocumentParams.build]] instead.
 */
export function createPmSubprojectDocumentParams(json: any): PmSubprojectDocumentParams {
  return PmSubprojectDocumentParams.build(json);
}

/**
 * PmSubprojectDocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmSubprojectDocumentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmSubprojectDocumentParams> {
  /**
   * Representation of the [[PmSubprojectDocumentParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of PmSubprojectDocumentParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmSubprojectDocumentParams);
  }
}

export namespace PmSubprojectDocumentParams {
  /**
   * Metadata information on all properties of the `PmSubprojectDocumentParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmSubprojectDocumentParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmSubprojectDocumentParams {
    return deserializeComplexTypeV4(json, PmSubprojectDocumentParams);
  }
}
