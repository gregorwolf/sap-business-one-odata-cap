/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class MaterialGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialGroupParams> {
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

  /**
   * Creates an instance of MaterialGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, MaterialGroupParams);
  }
}

export namespace MaterialGroupParams {
  /**
   * Metadata information on all properties of the `MaterialGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MaterialGroupParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'MaterialGroupCode',
    name: 'materialGroupCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): MaterialGroupParams {
    return deserializeComplexTypeV4(json, MaterialGroupParams);
  }
}
