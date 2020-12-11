/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class PmcSubprojectTypeDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcSubprojectTypeData> {
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

  /**
   * Creates an instance of PmcSubprojectTypeDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmcSubprojectTypeData);
  }
}

export namespace PmcSubprojectTypeData {
  /**
   * Metadata information on all properties of the `PmcSubprojectTypeData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcSubprojectTypeData>[] = [{
    originalName: 'SubprojectTypeID',
    name: 'subprojectTypeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SubprojectTypeName',
    name: 'subprojectTypeName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmcSubprojectTypeData {
    return deserializeComplexTypeV4(json, PmcSubprojectTypeData);
  }
}
