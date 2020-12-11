/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { TransTypesEnum } from './TransTypesEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * Layer
 */
export interface Layer {
  /**
   * Transaction Sequence Num.
   * @nullable
   */
  transactionSequenceNum?: number;
  /**
   * Layer Id.
   * @nullable
   */
  layerId?: number;
  /**
   * Doc Number.
   * @nullable
   */
  docNumber?: string;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: TransTypesEnum;
  /**
   * Entry Date.
   * @nullable
   */
  entryDate?: Moment;
  /**
   * Current Cost.
   * @nullable
   */
  currentCost?: number;
  /**
   * Open Qty.
   * @nullable
   */
  openQty?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[Layer.build]] instead.
 */
export function createLayer(json: any): Layer {
  return Layer.build(json);
}

/**
 * LayerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LayerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Layer> {
  /**
   * Representation of the [[Layer.transactionSequenceNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionSequenceNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransactionSequenceNum', this, 'Edm.Int32');
  /**
   * Representation of the [[Layer.layerId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layerId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LayerID', this, 'Edm.Int32');
  /**
   * Representation of the [[Layer.docNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocNumber', this, 'Edm.String');
  /**
   * Representation of the [[Layer.docType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocType', this);
  /**
   * Representation of the [[Layer.entryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EntryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[Layer.currentCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currentCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CurrentCost', this, 'Edm.Double');
  /**
   * Representation of the [[Layer.openQty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openQty: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpenQty', this, 'Edm.Double');

  /**
   * Creates an instance of LayerField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, Layer);
  }
}

export namespace Layer {
  /**
   * Metadata information on all properties of the `Layer` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Layer>[] = [{
    originalName: 'TransactionSequenceNum',
    name: 'transactionSequenceNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LayerID',
    name: 'layerId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocNumber',
    name: 'docNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocType',
    name: 'docType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EntryDate',
    name: 'entryDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CurrentCost',
    name: 'currentCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OpenQty',
    name: 'openQty',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): Layer {
    return deserializeComplexTypeV4(json, Layer);
  }
}
