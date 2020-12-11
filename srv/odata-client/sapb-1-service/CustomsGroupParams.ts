/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CustomsGroupParams
 */
export interface CustomsGroupParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Port Address.
   * @nullable
   */
  portAddress?: string;
  /**
   * Port State.
   * @nullable
   */
  portState?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CustomsGroupParams.build]] instead.
 */
export function createCustomsGroupParams(json: any): CustomsGroupParams {
  return CustomsGroupParams.build(json);
}

/**
 * CustomsGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CustomsGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CustomsGroupParams> {
  /**
   * Representation of the [[CustomsGroupParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[CustomsGroupParams.portAddress]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portAddress: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PortAddress', this, 'Edm.String');
  /**
   * Representation of the [[CustomsGroupParams.portState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portState: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PortState', this, 'Edm.String');

  /**
   * Creates an instance of CustomsGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CustomsGroupParams);
  }
}

export namespace CustomsGroupParams {
  /**
   * Metadata information on all properties of the `CustomsGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CustomsGroupParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PortAddress',
    name: 'portAddress',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PortState',
    name: 'portState',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CustomsGroupParams {
    return deserializeComplexTypeV4(json, CustomsGroupParams);
  }
}
