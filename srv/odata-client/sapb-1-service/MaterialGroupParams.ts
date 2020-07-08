/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * MaterialGroupParams
 */
export interface MaterialGroupParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Material Group Code.
   * @nullable
   */
  materialGroupCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[MaterialGroupParams.build]] instead.
 */
export function createMaterialGroupParams(json: any): MaterialGroupParams {
  return MaterialGroupParams.build(json);
}

/**
 * MaterialGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MaterialGroupParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[MaterialGroupParams.materialGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  materialGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MaterialGroupCode', this, 'Edm.String');
}

export namespace MaterialGroupParams {
  export function build(json: { [keys: string]: FieldType }): MaterialGroupParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      MaterialGroupCode: (materialGroupCode: string) => ({ materialGroupCode: edmToTs(materialGroupCode, 'Edm.String') })
    });
  }
}
