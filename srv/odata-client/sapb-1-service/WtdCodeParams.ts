/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WtdCodeParams
 */
export interface WtdCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: string;
  /**
   * W Tax Name.
   * @nullable
   */
  wTaxName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WtdCodeParams.build]] instead.
 */
export function createWtdCodeParams(json: any): WtdCodeParams {
  return WtdCodeParams.build(json);
}

/**
 * WtdCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtdCodeParams> {
  /**
   * Representation of the [[WtdCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WtdCodeParams.wTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[WtdCodeParams.wTaxName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxName', this, 'Edm.String');

  /**
   * Creates an instance of WtdCodeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WtdCodeParams);
  }
}

export namespace WtdCodeParams {
  /**
   * Metadata information on all properties of the `WtdCodeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WtdCodeParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WTaxCode',
    name: 'wTaxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WTaxName',
    name: 'wTaxName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WtdCodeParams {
    return deserializeComplexTypeV4(json, WtdCodeParams);
  }
}
