/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WipMapping
 */
export interface WipMapping {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Account From.
   * @nullable
   */
  accountFrom?: string;
  /**
   * Account To.
   * @nullable
   */
  accountTo?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WipMapping.build]] instead.
 */
export function createWipMapping(json: any): WipMapping {
  return WipMapping.build(json);
}

/**
 * WipMappingField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WipMappingField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WipMapping> {
  /**
   * Representation of the [[WipMapping.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WipMapping.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[WipMapping.accountFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountFrom: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountFrom', this, 'Edm.String');
  /**
   * Representation of the [[WipMapping.accountTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountTo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountTo', this, 'Edm.String');

  /**
   * Creates an instance of WipMappingField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WipMapping);
  }
}

export namespace WipMapping {
  /**
   * Metadata information on all properties of the `WipMapping` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WipMapping>[] = [{
    originalName: 'AbsoluteEntry',
    name: 'absoluteEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AccountFrom',
    name: 'accountFrom',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AccountTo',
    name: 'accountTo',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WipMapping {
    return deserializeComplexTypeV4(json, WipMapping);
  }
}
