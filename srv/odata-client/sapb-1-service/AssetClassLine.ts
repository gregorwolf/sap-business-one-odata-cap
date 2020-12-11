/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AssetClassLine
 */
export interface AssetClassLine {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Depreciation Area Id.
   * @nullable
   */
  depreciationAreaId?: string;
  /**
   * Active Status.
   * @nullable
   */
  activeStatus?: BoYesNoEnum;
  /**
   * Account Determination.
   * @nullable
   */
  accountDetermination?: string;
  /**
   * Depreciation Type Id.
   * @nullable
   */
  depreciationTypeId?: string;
  /**
   * Use Life.
   * @nullable
   */
  useLife?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[AssetClassLine.build]] instead.
 */
export function createAssetClassLine(json: any): AssetClassLine {
  return AssetClassLine.build(json);
}

/**
 * AssetClassLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetClassLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AssetClassLine> {
  /**
   * Representation of the [[AssetClassLine.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[AssetClassLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[AssetClassLine.depreciationAreaId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationAreaId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationAreaID', this, 'Edm.String');
  /**
   * Representation of the [[AssetClassLine.activeStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ActiveStatus', this);
  /**
   * Representation of the [[AssetClassLine.accountDetermination]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountDetermination: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountDetermination', this, 'Edm.String');
  /**
   * Representation of the [[AssetClassLine.depreciationTypeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationTypeId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationTypeID', this, 'Edm.String');
  /**
   * Representation of the [[AssetClassLine.useLife]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useLife: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UseLife', this, 'Edm.Int32');

  /**
   * Creates an instance of AssetClassLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AssetClassLine);
  }
}

export namespace AssetClassLine {
  /**
   * Metadata information on all properties of the `AssetClassLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetClassLine>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DepreciationAreaID',
    name: 'depreciationAreaId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ActiveStatus',
    name: 'activeStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AccountDetermination',
    name: 'accountDetermination',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DepreciationTypeID',
    name: 'depreciationTypeId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UseLife',
    name: 'useLife',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AssetClassLine {
    return deserializeComplexTypeV4(json, AssetClassLine);
  }
}
