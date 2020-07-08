/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class AssetClassLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace AssetClassLine {
  export function build(json: { [keys: string]: FieldType }): AssetClassLine {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      DepreciationAreaID: (depreciationAreaId: string) => ({ depreciationAreaId: edmToTs(depreciationAreaId, 'Edm.String') }),
      AccountDetermination: (accountDetermination: string) => ({ accountDetermination: edmToTs(accountDetermination, 'Edm.String') }),
      DepreciationTypeID: (depreciationTypeId: string) => ({ depreciationTypeId: edmToTs(depreciationTypeId, 'Edm.String') }),
      UseLife: (useLife: number) => ({ useLife: edmToTs(useLife, 'Edm.Int32') })
    });
  }
}
