/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TableInfo
 */
export interface TableInfo {
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TableInfo.build]] instead.
 */
export function createTableInfo(json: any): TableInfo {
  return TableInfo.build(json);
}

/**
 * TableInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TableInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TableInfo> {
  /**
   * Representation of the [[TableInfo.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');

  /**
   * Creates an instance of TableInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TableInfo);
  }
}

export namespace TableInfo {
  /**
   * Metadata information on all properties of the `TableInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TableInfo>[] = [{
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TableInfo {
    return deserializeComplexTypeV4(json, TableInfo);
  }
}
