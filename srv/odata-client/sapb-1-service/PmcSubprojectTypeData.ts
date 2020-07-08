/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmcSubprojectTypeData
 */
export interface PmcSubprojectTypeData {
  /**
   * Subproject Type Id.
   * @nullable
   */
  subprojectTypeId?: number;
  /**
   * Subproject Type Name.
   * @nullable
   */
  subprojectTypeName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PmcSubprojectTypeData.build]] instead.
 */
export function createPmcSubprojectTypeData(json: any): PmcSubprojectTypeData {
  return PmcSubprojectTypeData.build(json);
}

/**
 * PmcSubprojectTypeDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcSubprojectTypeDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmcSubprojectTypeData.subprojectTypeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectTypeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubprojectTypeID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmcSubprojectTypeData.subprojectTypeName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectTypeName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SubprojectTypeName', this, 'Edm.String');
}

export namespace PmcSubprojectTypeData {
  export function build(json: { [keys: string]: FieldType }): PmcSubprojectTypeData {
    return createComplexType(json, {
      SubprojectTypeID: (subprojectTypeId: number) => ({ subprojectTypeId: edmToTs(subprojectTypeId, 'Edm.Int32') }),
      SubprojectTypeName: (subprojectTypeName: string) => ({ subprojectTypeName: edmToTs(subprojectTypeName, 'Edm.String') })
    });
  }
}
