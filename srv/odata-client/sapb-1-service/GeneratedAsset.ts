/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GeneratedAssetStatusEnum } from './GeneratedAssetStatusEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * GeneratedAsset
 */
export interface GeneratedAsset {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Asset Code.
   * @nullable
   */
  assetCode?: string;
  /**
   * Status.
   * @nullable
   */
  status?: GeneratedAssetStatusEnum;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Serial Number.
   * @nullable
   */
  serialNumber?: string;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
  /**
   * Amount Sc.
   * @nullable
   */
  amountSc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[GeneratedAsset.build]] instead.
 */
export function createGeneratedAsset(json: any): GeneratedAsset {
  return GeneratedAsset.build(json);
}

/**
 * GeneratedAssetField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GeneratedAssetField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GeneratedAsset> {
  /**
   * Representation of the [[GeneratedAsset.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[GeneratedAsset.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[GeneratedAsset.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[GeneratedAsset.assetCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assetCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AssetCode', this, 'Edm.String');
  /**
   * Representation of the [[GeneratedAsset.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[GeneratedAsset.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[GeneratedAsset.serialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[GeneratedAsset.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('amount', this, 'Edm.Double');
  /**
   * Representation of the [[GeneratedAsset.amountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('amountSC', this, 'Edm.Double');

  /**
   * Creates an instance of GeneratedAssetField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, GeneratedAsset);
  }
}

export namespace GeneratedAsset {
  /**
   * Metadata information on all properties of the `GeneratedAsset` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GeneratedAsset>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'VisualOrder',
    name: 'visualOrder',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AssetCode',
    name: 'assetCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SerialNumber',
    name: 'serialNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'amount',
    name: 'amount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'amountSC',
    name: 'amountSc',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): GeneratedAsset {
    return deserializeComplexTypeV4(json, GeneratedAsset);
  }
}
