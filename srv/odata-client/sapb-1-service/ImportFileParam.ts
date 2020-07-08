/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ImportFileParamField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ImportFileParam.filePath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  filePath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FilePath', this, 'Edm.String');
}

export namespace ImportFileParam {
  export function build(json: { [keys: string]: FieldType }): ImportFileParam {
    return createComplexType(json, {
      FilePath: (filePath: string) => ({ filePath: edmToTs(filePath, 'Edm.String') })
    });
  }
}
