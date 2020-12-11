/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BinLocationParams
 */
export interface BinLocationParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Bin Code.
   * @nullable
   */
  binCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BinLocationParams.build]] instead.
 */
export function createBinLocationParams(json: any): BinLocationParams {
  return BinLocationParams.build(json);
}

/**
 * BinLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BinLocationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BinLocationParams> {
  /**
   * Representation of the [[BinLocationParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BinLocationParams.binCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BinCode', this, 'Edm.String');

  /**
   * Creates an instance of BinLocationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BinLocationParams);
  }
}

export namespace BinLocationParams {
  /**
   * Metadata information on all properties of the `BinLocationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BinLocationParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BinCode',
    name: 'binCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BinLocationParams {
    return deserializeComplexTypeV4(json, BinLocationParams);
  }
}
