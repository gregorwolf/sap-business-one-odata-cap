/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ClosingOptionEnum } from './ClosingOptionEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AssetDocumentParams
 */
export interface AssetDocumentParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Cancellation Option.
   * @nullable
   */
  cancellationOption?: ClosingOptionEnum;
  /**
   * Cancellation Date.
   * @nullable
   */
  cancellationDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[AssetDocumentParams.build]] instead.
 */
export function createAssetDocumentParams(json: any): AssetDocumentParams {
  return AssetDocumentParams.build(json);
}

/**
 * AssetDocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetDocumentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AssetDocumentParams> {
  /**
   * Representation of the [[AssetDocumentParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[AssetDocumentParams.cancellationOption]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationOption: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CancellationOption', this);
  /**
   * Representation of the [[AssetDocumentParams.cancellationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CancellationDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of AssetDocumentParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AssetDocumentParams);
  }
}

export namespace AssetDocumentParams {
  /**
   * Metadata information on all properties of the `AssetDocumentParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetDocumentParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CancellationOption',
    name: 'cancellationOption',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CancellationDate',
    name: 'cancellationDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AssetDocumentParams {
    return deserializeComplexTypeV4(json, AssetDocumentParams);
  }
}
