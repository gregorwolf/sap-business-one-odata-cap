/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PosTotalizer
 */
export interface PosTotalizer {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Number.
   * @nullable
   */
  number?: number;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PosTotalizer.build]] instead.
 */
export function createPosTotalizer(json: any): PosTotalizer {
  return PosTotalizer.build(json);
}

/**
 * PosTotalizerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PosTotalizerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PosTotalizer> {
  /**
   * Representation of the [[PosTotalizer.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[PosTotalizer.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[PosTotalizer.number]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Number', this, 'Edm.Int32');
  /**
   * Representation of the [[PosTotalizer.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[PosTotalizer.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');

  /**
   * Creates an instance of PosTotalizerField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PosTotalizer);
  }
}

export namespace PosTotalizer {
  /**
   * Metadata information on all properties of the `PosTotalizer` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PosTotalizer>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Number',
    name: 'number',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Total',
    name: 'total',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PosTotalizer {
    return deserializeComplexTypeV4(json, PosTotalizer);
  }
}
