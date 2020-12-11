/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ImportFileParam
 */
export interface ImportFileParam {
  /**
   * File Path.
   * @nullable
   */
  filePath?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ImportFileParam.build]] instead.
 */
export function createImportFileParam(json: any): ImportFileParam {
  return ImportFileParam.build(json);
}

/**
 * ImportFileParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ImportFileParamField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ImportFileParam> {
  /**
   * Representation of the [[ImportFileParam.filePath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  filePath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FilePath', this, 'Edm.String');

  /**
   * Creates an instance of ImportFileParamField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ImportFileParam);
  }
}

export namespace ImportFileParam {
  /**
   * Metadata information on all properties of the `ImportFileParam` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ImportFileParam>[] = [{
    originalName: 'FilePath',
    name: 'filePath',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ImportFileParam {
    return deserializeComplexTypeV4(json, ImportFileParam);
  }
}
