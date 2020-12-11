/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoChangeLogEnum } from './BoChangeLogEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * GetChangeLogParams
 */
export interface GetChangeLogParams {
  /**
   * Primary Key.
   * @nullable
   */
  primaryKey?: string;
  /**
   * Udo Object Code.
   * @nullable
   */
  udoObjectCode?: string;
  /**
   * Object.
   * @nullable
   */
  object?: BoChangeLogEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[GetChangeLogParams.build]] instead.
 */
export function createGetChangeLogParams(json: any): GetChangeLogParams {
  return GetChangeLogParams.build(json);
}

/**
 * GetChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GetChangeLogParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GetChangeLogParams> {
  /**
   * Representation of the [[GetChangeLogParams.primaryKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryKey: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PrimaryKey', this, 'Edm.String');
  /**
   * Representation of the [[GetChangeLogParams.udoObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udoObjectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDOObjectCode', this, 'Edm.String');
  /**
   * Representation of the [[GetChangeLogParams.object]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  object: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Object', this);

  /**
   * Creates an instance of GetChangeLogParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, GetChangeLogParams);
  }
}

export namespace GetChangeLogParams {
  /**
   * Metadata information on all properties of the `GetChangeLogParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GetChangeLogParams>[] = [{
    originalName: 'PrimaryKey',
    name: 'primaryKey',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDOObjectCode',
    name: 'udoObjectCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Object',
    name: 'object',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): GetChangeLogParams {
    return deserializeComplexTypeV4(json, GetChangeLogParams);
  }
}
